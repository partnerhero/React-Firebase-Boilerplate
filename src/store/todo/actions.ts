import { Todo } from "./reducers";
import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from "./types";

export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

export function removeTodo(todo: Todo): TodoActionTypes {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
}
