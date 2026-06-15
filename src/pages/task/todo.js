import { useEffect, useState } from "react"
import './todo.css';
import '../../App.css';

export function Todo() {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [todoClick, setTodoClick] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('todolist')) || [];
        setTodoList(stored);
    }, [])

    function handleTodoInput(event) {
        if (event.key === 'Enter' && event.target.value.length > 0) {
            const updatedTodoList = [...todoList, { _id: crypto.randomUUID(), todo: event.target.value, isDone: false }];
            setTodoList(updatedTodoList);
            setTodo('');
            localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
        }
    }

    function handleToggleTodo(id) {
        const updatedTodoList = todoList.map(item =>
            item._id === id ? { ...item, isDone: !item.isDone } : item
        );
        setTodoList(updatedTodoList);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    }

    function handleRemoveTodo(id) {
        const updatedTodoList = todoList.filter(({ _id }) => _id !== id);
        setTodoList(updatedTodoList);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    }

    return (
        <div className="todo-container">
            <button onClick={() => setTodoClick(!todoClick)}>ToDo</button>
            <div className="todo-item">
                <div className="todo-list">
                {todoClick && todoList && todoList.map(({ _id, todo, isDone }) => {
                    return (
                        <div key={_id}>
                            <label>
                                <input type="checkbox" checked={isDone} onChange={() => handleToggleTodo(_id)} />
                                <span className={isDone ? "strike-through" : "as-it-is"}>{todo}</span>
                            </label>
                            <button className="close-button bg-transparent" onClick={() => handleRemoveTodo(_id)}>
                                <img src="https://img.icons8.com/?size=100&id=45&format=png&color=FA5252" style={{ width: "15px", float: "right"}} />
                            </button>
                        </div>
                    )
                })}
                {todoClick && <input value={todo} className="todo-input" type="text" onChange={(e) => setTodo(e.target.value)} onKeyDownCapture={handleTodoInput} />}
                </div>
            </div>
        </div>
    )
}