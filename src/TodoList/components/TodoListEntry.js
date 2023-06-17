import React from "react";
import { useDispatch } from "react-redux";
import { removeEntry, toggleEntryDone } from "../TodoListSlice";
import ConfettiExplosion from 'react-confetti-explosion';

const TodoListEntry = ({ children, id, isDone }) => {
    const dispatch = useDispatch();

    return (
        <div className={`entry`}>
            <div className="entry-actions-container">
                <button
                    aria-label="Remove"
                    className="remove"
                    onClick={() => dispatch(removeEntry(id))}
                >
                    Remove
                </button>
                <button
                    aria-label="Mark Done"
                    className="done"
                    onClick={() => {
                        dispatch(toggleEntryDone(id));
                    }}
                >
                    {isDone ? "Redo" : "Done"}
                    {isDone && <ConfettiExplosion />}
                </button>
            </div>
            {children}
        </div>
    );
};

export default TodoListEntry;
