import {
  ADD_TODO,
  CHECK_TODO,
  InitialState,
  REMOVE_TODO,
  TodoActionTypes,
} from "./types";

const initialState: InitialState = {
  data: [],
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): InitialState => {
  const todosData = state.data;
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        data: [...todosData, action.payload],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        data: todosData.filter((_, index) => index !== action.payload),
      };
    }
    case CHECK_TODO: {
      return {
        ...state,
        data: todosData.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, checked: !todo.checked };
          } else {
            return { ...todo };
          }
        }),
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
