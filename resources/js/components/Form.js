import { set } from "lodash";
import React, { useState } from "react";

const Form = ({ setTodos }) => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (todo === "") {
            setError("The todo must be something");

            setTimeout(() => setError(''), 2000)

            return;
        }
        let newTodo = {
            body: todo,
            completed: false,
        };

        setTodos((todos) => [...todos, newTodo]);
        setTodo("");
    };

    return (
        <div className="todo__form">
            <div className="form-group">
                <label htmlFor="todo">Todo</label>
                <input
                    type="text"
                    className="form-control"
                    name="todo"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' && handleSubmit()}
                />
                {error !== "" && <p className="text-danger">{error}</p>}
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
                Add
            </button>
        </div>
    );
};

export default Form;
