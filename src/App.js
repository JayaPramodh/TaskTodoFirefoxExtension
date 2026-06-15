import './App.css';
import { Home } from './pages/home/home';
import { useTask } from './context/taskContext';
import { Task } from './pages/task/task';
import { useEffect } from 'react';
import bg from './backgroundImg.jpg';

function App() {

  const {name, taskDispatch} = useTask();

  useEffect(() => {
    taskDispatch({
      type: "NAME",
      payload: localStorage.getItem("name")
    })
  }, []);

  return (
    <div className="flex-col app-container" style={{ backgroundImage: `url(${bg})` }}>
      {name ? <Task /> : <Home />}
    </div>
  );
}

export default App;
