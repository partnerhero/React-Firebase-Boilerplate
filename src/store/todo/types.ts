import { Todo } from "./reducer";

export const ADD_TODO = "boilerplate/todos/ADD_TODO";
export const REMOVE_TODO = "boilerplate/todos/REMOVE_TODO";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: Todo;
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;
