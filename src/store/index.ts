import { combineReducers } from "redux";
import { todoReducer } from "./todo";

export const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
