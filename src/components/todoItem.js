import React, { useEffect, useState } from "react";

const UNAUTHORISED = 401;

const TodoItem = ({item, deleteItem, toggleCompleteItem}) => {
    const [editing, setEditing] = useState(false);

    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={item.completed} onChange={event => {
                    toggleCompleteItem(item.id, item);
                }
                } />
                <label className="todo-label" htmlFor="todo-0">
                    {item?.name}
                </label>
            </div>
            <div className="btn-group">
                {/* <button type="button" className="btn" onClick={event => setEditing(!editing)}>
                    Edit <span className="visually-hidden">{item?.name}</span>
                </button> */}
                <button type="button" className="btn btn__danger"  onClick={event => deleteItem(item.id)}>
                    Delete <span className="visually-hidden">{item?.name}</span>
                </button>
            </div>
        </li>
    )
}

export default TodoItem;