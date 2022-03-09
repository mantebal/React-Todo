import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Todo from "./Todo";

const App = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className="todo card">
            <h1 className="todo__header card-header">Todo list</h1>
            <div className="todo__body card-body">
                <Form setTodos={setTodos} />
                <hr />
                {todos.map((todo, key) => (
                    <Todo key={key} todo={todo} setTodos={setTodos}/>
                ))}
            </div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("todo-app"));
