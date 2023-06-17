import { createSlice } from "@reduxjs/toolkit";

var MAX_TASKS = 10;

export const TodoListSlice = createSlice({
    name: "Todo List",
    initialState: {
        entries: [], // Todo instances
        doneEntries: []
    },
    //reducers are the actions we use to change the states
    reducers: { 
        //adding a todo instance to "entries" state
        addTodoEntry: (state, action) => {
            if (state.entries.length <= MAX_TASKS) {
                state.entries.push({ text: action.payload, isDone: false });
            }
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
