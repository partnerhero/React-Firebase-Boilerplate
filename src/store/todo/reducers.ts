import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from "./types";

export interface Todo {
  id: string;
  title: string;
}

export interface InitialState {
  todos: Todo[];
}

const initialState: InitialState = {
  todos: [],
};

export default (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
