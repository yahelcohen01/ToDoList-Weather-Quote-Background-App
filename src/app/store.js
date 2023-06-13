import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from '../TodoList/TodoListSlice';

export default configureStore({
    reducer: {
        TodoList: TodoListReducer
    }
});
