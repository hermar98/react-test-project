import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoItem } from "../api/types";
import { Checkbox, ListItemButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

type TodoListProps = {
  items: TodoItem[];
  onCheck: (item: TodoItem) => void;
  onDelete: (item: TodoItem) => void;
};

const TodoList = ({ items, onCheck, onDelete }: TodoListProps) => {
  const history = useHistory();
  const user = useContext(UserContext);

  return (
    <List data-cy="todo-list">
      {items.map((item, i) => (
        <ListItem
          data-cy={`todo-item-${i}`}
          key={i}
          secondaryAction={
            <IconButton
              data-cy={`todo-item-${i}-delete-button`}
              onClick={() => onDelete(item)}
              disabled={!user.isAdmin}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            data-cy={`todo-item-${i}-checkbox`}
            checked={item.checked}
            onChange={() => onCheck({ ...item, checked: !item.checked })}
          />
          <ListItemButton onClick={() => history.push(`/${item.id}`)}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
