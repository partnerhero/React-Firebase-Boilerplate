import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import TodoListItem from "@components/TodoListItem";
import { Todo } from "@store/todos/types";

interface Props {
  items: Todo[];
  onItemRemove: (idx: number) => void;
  onItemCheck: (idx: number) => void;
}

const TodoList: React.FC<Props> = (props) => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {props.items.map((todo, idx) => (
            <TodoListItem
              checked={todo.checked}
              text={todo.title}
              key={`TodoItem.${todo.id}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
);

export default TodoList;
