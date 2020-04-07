import { RootState } from "@store/index";
import { Todo } from "@store/todos/types";

export function selectTodoItems(state: RootState): Todo[] {
  return state.todos.data;
}
