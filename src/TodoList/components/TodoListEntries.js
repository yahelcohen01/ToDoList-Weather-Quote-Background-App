import React from "react";
import TodoListEntry from "./TodoListEntry";

const TodoListEntries = ({ entries }) => {

    return (
        <div className="theme">
            <ul className="entries-list">
                {entries.map(({ text, isDone }, index) => (
                    <li
                        key={text}
                        className={` ${isDone ? "entry-done" : ""
                            }`}
                    >
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
