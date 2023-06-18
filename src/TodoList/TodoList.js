import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListEntries from "./components/TodoListEntries";
import { addTodoEntry } from "./TodoListSlice";

//function that returns the final form of the Todo list section in the app
const TodoList = () => {
    const [newTodoListEntry, setNewTodoListEntry] = useState(""); //setting new state which is the input 
    const { entries } = useSelector((state) => state.TodoList); //
    const dispatch = useDispatch();

    
    const onFormSubmit = (e) => {
        e.preventDefault();

        if (newTodoListEntry === "") {
            return;
        }

        dispatch(addTodoEntry(newTodoListEntry)); //add new entry for the list
        setNewTodoListEntry("");
    };

    return (
        <>
            <div id="TodoList" className="">
                <h2>Todo List App</h2>

                <form onSubmit={onFormSubmit}>
                    <input type="text" className="form-control" placeholder="Enter task(Up to 10)" value={newTodoListEntry} aria-label="New TodoList entry"
                           onChange={(e) => { setNewTodoListEntry(e.target.value); }}/>
                </form>
            </div>
            <TodoListEntries entries={entries} />
        </>
    );
};

export default TodoList;
