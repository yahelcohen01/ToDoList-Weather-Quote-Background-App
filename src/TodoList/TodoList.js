import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListEntries from "./components/TodoListEntries";
import { addTodoEntry } from "./TodoListSlice";

const TodoList = () => {
    const [newTodoListEntry, setNewTodoListEntry] = useState("");
    const { entries } = useSelector((state) => state.TodoList);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (newTodoListEntry === "") {
            return;
        }

        dispatch(addTodoEntry(newTodoListEntry));
        setNewTodoListEntry("");
    };

    return (
        <>
            <div id="TodoList" className="surface">
                <h2>Todo List App</h2>

                <form onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter task"
                        value={newTodoListEntry}
                        onChange={(e) => {
                            setNewTodoListEntry(e.target.value);
                        }}
                        aria-label="New TodoList entry"
                    />

                </form>
            </div>
            <TodoListEntries entries={entries} />
        </>
    );
};

export default TodoList;
