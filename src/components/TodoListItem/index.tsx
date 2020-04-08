import React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

interface Props {
  onCheckBoxToggle: (event: React.MouseEvent) => void;
  checked: boolean;
  text: string;
  onButtonClick: (event: React.SyntheticEvent) => void;
  divider?: boolean;
}

const TodoListItem: React.FC<Props> = (props) => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default TodoListItem;
