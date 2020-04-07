export const ADD_TODO = "boilerplate/todos/ADD_TODO";
export const REMOVE_TODO = "boilerplate/todos/REMOVE_TODO";
export const CHECK_TODO = "boilerplate/todos/CHECK_TODO";

export interface Todo {
  id: number;
  title: string;
  checked: boolean;
}

export interface InitialState {
  data: Todo[];
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export interface CheckTodoAction {
  type: typeof CHECK_TODO;
  payload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | CheckTodoAction;
