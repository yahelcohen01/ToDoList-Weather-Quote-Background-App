import React from "react";
import TodoListEntry from "./TodoListEntry";

//function that returns the list of the existing TodoEntry's
const TodoListEntries = ({ entries }) => {

    return (
        <div className="theme">
            <ul className="entries-list">
                {entries.map(({ text, isDone }, index) => (
                    <li
                        key={text}
                        className={` ${isDone ? "entry-done" : ""}`}
                    >{/*if the entry is done it displays as the entry-done css settings*/}
                        <TodoListEntry id={index} isDone={isDone}>
                            {text}
                        </TodoListEntry>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListEntries;
