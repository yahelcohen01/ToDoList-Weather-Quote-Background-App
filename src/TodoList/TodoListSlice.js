import { createSlice } from "@reduxjs/toolkit";

export const TodoListSlice = createSlice({
    name: "journal",
    initialState: {
        entries: [
        ],
        doneEntries: []
    },
    reducers: {
        addTodoEntry: (state, action) => {
            state.entries.push({ text: action.payload, isDone: false });
        },
        removeEntry: (state, action) => {
            state.entries.splice(action.payload, 1);
        },
        toggleEntryDone: (state, action) => {
            state.entries[action.payload].isDone = !state.entries[action.payload]
                .isDone;
        }
    }
});

export const {
    addTodoEntry,
    removeEntry,
    toggleEntryDone
} = TodoListSlice.actions;

export default TodoListSlice.reducer;
