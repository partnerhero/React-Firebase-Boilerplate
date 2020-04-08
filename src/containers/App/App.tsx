import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Layout from "@components/Layout";
import AddTodo from "@components/AddTodo";
import TodoList from "@components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoItems } from "@store/todos/selectors";
import { addTodo, checkTodo, removeTodo } from "@store/todos/actions";
import "./App.css";
import { Todo } from "@store/todos/types";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    width: "100%",
  },
  paper: {
    width: "90%",
    leftMargin: "15px",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState("");
  const todos = useSelector(selectTodoItems);
  const dispatch = useDispatch();
  function clearInputAndAddToDo(): void {
    const todo: Todo = {
      id: (Math.random() * 5000) | 0, // trick to parse to integer https://stackoverflow.com/questions/8388440/converting-a-double-to-an-int-in-javascript-without-rounding
      checked: false,
      title: inputValue,
    };
    dispatch(addTodo(todo));
    setInputValue("");
  }

  function handleInputKeyPress(
    event: React.KeyboardEvent<HTMLInputElement>
  ): boolean {
    if (event.which === 13 || event.keyCode === 13) {
      clearInputAndAddToDo();
      return true;
    }
    return false;
  }

  function handleAddButtonClick(): void {
    clearInputAndAddToDo();
  }

  return (
    <div className={classes.root}>
      <Layout>
        <Typography variant="h2">Todo App</Typography>
        <AddTodo
          inputValue={inputValue}
          onInputChange={(e) => setInputValue(e.target.value)}
          onInputKeyPress={handleInputKeyPress}
          onButtonClick={handleAddButtonClick}
        />
        <TodoList
          items={todos}
          onItemRemove={(index) => dispatch(removeTodo(index))}
          onItemCheck={(index) => dispatch(checkTodo(index))}
        />
      </Layout>
    </div>
  );
};

export default App;
