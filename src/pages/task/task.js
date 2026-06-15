import { useEffect, useState } from "react";
import { useTask } from "../../context/taskContext";
import { setTime } from "./setTime";
import { handleTaskInput } from "./setTask";
import './task.css';
import '../../App.css';
import { Todo } from "./todo";

export function Task() {

    const [taskStatus, setTaskStatus] = useState(JSON.parse(localStorage.getItem("taskStatus")) || false);

    const { name, time, task, taskDispatch } = useTask();

    useEffect(() => {
        setTime(taskDispatch);
        const currDate = new Date().toDateString();
        if(currDate !== localStorage.getItem("time")) {
            localStorage.removeItem('name');
            localStorage.removeItem('task');
            localStorage.removeItem('time');
            localStorage.removeItem('todolist');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("taskStatus", JSON.stringify(taskStatus));
    }, [taskStatus]);

    return (
        <div className="task-container flex-col">
            <h2>{time}</h2>
            <h1>Hi, {name}!</h1>
            <h1>Welcome to the Task Page</h1>
            {name !== "" && task === "" ?
                <div>
                    <h3 style={{textAlign: "center", marginBottom: "25px"}}>Please enter your TASK with atmost Priority</h3>
                    <input style={{textAlign: "center", fontSize:"20px"}} className="bg-transparent task-input bottom-border font-med" type='text' onKeyDownCapture={(e) => handleTaskInput(e, taskDispatch)} />
                </div> :
                <div className="task-item">
                    <label>
                        <input type="checkbox" value={taskStatus} checked={taskStatus} onChange={(e) => setTaskStatus(e.target.checked)}/>
                        <span style={{fontSize: "20px"}} className={taskStatus ? "strike-through" : "as-it-is"}>{task}</span>
                    </label>
                    &nbsp;
                    <button className="close-button bg-transparent" onClick={(e) => {
                        taskDispatch({
                            type: 'TASK',
                            payload: ""
                        });
                        localStorage.removeItem("task");
                    }}>
                        <img src="https://img.icons8.com/?size=100&id=45&format=png&color=FA5252" style={{width: "25px"}}/>
                    </button>

                    <Todo className="task-todo absolute"/>

                </div>
            }
        </div>
    )
}