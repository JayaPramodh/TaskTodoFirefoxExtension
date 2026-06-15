import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

const initialValue = {
    name: "",
    time: "",
    task: localStorage.getItem('task') || ""
}


const TaskContext = createContext(initialValue);

export function TaskProvider({children}) {

    const [{name, time, task}, taskDispatch] = useReducer(taskReducer, initialValue);

    return (
        <TaskContext.Provider value={{name, time, task, taskDispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext);