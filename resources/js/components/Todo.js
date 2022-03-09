import React, { useState } from "react";

const Todo = ({ todo, setTodos }) => {
    const [completed, setCompleted] = useState(todo.completed);
    const handleChecked = () => {
        setCompleted(!completed)
    };
    const handleDelete = () => {
        setTodos(todos => todos.filter(existingTodo => existingTodo.body !== todo.body))
    }

    return (
        <div>
            <input
                type="checkbox"
                className="d-inline mr-2"
                checked={completed}
                onChange={handleChecked}
            />
            <p className={"d-inline " + (completed && 'text-strikethrough')}>{todo.body}</p>
            <p className="d-inline float-right text-danger" onClick={handleDelete}>x</p>
        </div>
    );
};

export default Todo;
