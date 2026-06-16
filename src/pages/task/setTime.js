export function setTime(taskDispatch) {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const h = hours < 10 ? `0${hours}` : hours;
    const m = minutes < 10 ? `0${minutes}` : minutes;

    taskDispatch({
        type: "TIME",
        payload: `${h}:${m}`
    })

    // Clear stored task data when the date changes while app is open
    const fullDate = new Date();
    const today = `${fullDate.getDate()}${fullDate.getMonth()}${fullDate.getFullYear()}`;
    const storedDate = localStorage.getItem('time');
    if (storedDate && storedDate !== today) {
        localStorage.removeItem('name');
        localStorage.removeItem('task');
        localStorage.removeItem('todolist');
    }

    localStorage.setItem("time", today);
    setTimeout(() => setTime(taskDispatch), 1000);
}