import React, { useEffect, useState } from "react";
import TodoItem from "./todoItem";

const TodoList = ({list, deleteItem, toggleCompleteItem}) => {
    return (
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {list.map(item => <TodoItem key={item.id} item={item} deleteItem={deleteItem} toggleCompleteItem={toggleCompleteItem} />)}
        </ul>
    )
}

export default TodoList;