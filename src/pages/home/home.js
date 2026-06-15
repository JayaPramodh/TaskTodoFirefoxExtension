import './home.css';
import '../../App.css';
import { useTask } from '../../context/taskContext';
import { useEffect } from 'react';
import { setTime } from '../task/setTime';

export function Home() {

    const {name, time, taskDispatch} = useTask();

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
    
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    function onHandleInput(event) {
        if(event.key === 'Enter' && event.target.value.length > 0) {
            taskDispatch({
                type: 'NAME',
                payload: event.target.value
            })
            localStorage.setItem("name", event.target.value);
        }
    }

    return (
        <div className="home-container flex-col gap-5">
            <h2>{time}</h2>
            <h1>Hi, Welcome to TASK definer</h1>
            <h3 style={{fontSize: '1.25rem'}}>Please address yorself to proceed</h3>
            <form onSubmit={handleFormSubmit}>
                <input className='home-name-input' type='text' onKeyDownCapture={onHandleInput}/>
            </form>
        </div>
    )
}