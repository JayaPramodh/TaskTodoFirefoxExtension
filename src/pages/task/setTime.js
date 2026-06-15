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

    setTimeout(() => setTime(taskDispatch), 1000);
    localStorage.setItem("time", new Date().toDateString());
}