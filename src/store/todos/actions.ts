import {
  ADD_TODO,
  CHECK_TODO,
  REMOVE_TODO,
  Todo,
  TodoActionTypes,
} from "./types";

export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

export function removeTodo(index: number): TodoActionTypes {
  return {
    type: REMOVE_TODO,
    payload: index,
  };
}

export function checkTodo(index: number): TodoActionTypes {
  return {
    type: CHECK_TODO,
    payload: index,
  };
}
