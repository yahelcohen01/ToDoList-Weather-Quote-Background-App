import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from '../TodoList/TodoListSlice';

//holds the state tree of the app
export default configureStore({
    reducer: {
        TodoList: TodoListReducer
    }
});
