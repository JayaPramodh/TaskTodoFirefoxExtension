export function handleTaskInput(event, taskDispatch) {
        if(event.key === 'Enter' && event.target.value.length > 0) {
            const taskInput = event.target.value;
            taskDispatch({
                type: 'TASK',
                payload: taskInput
            })
            localStorage.setItem('task', taskInput)
        }
    }