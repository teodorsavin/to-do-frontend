import React, { useState } from "react";
import TodoService from "../services/todoService";

const TodoForm = ({setItem}) =>{
    const [itemInput, setItemInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Add an item?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                onChange={event => setItemInput(event.target.value)} value={itemInput}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default TodoForm;