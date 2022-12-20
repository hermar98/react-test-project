import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoItem } from "../api/types";
import { Checkbox } from "@mui/material";

type TodoListProps = {
  items: TodoItem[];
  onCheck: (item: TodoItem) => void;
  onDelete: (item: TodoItem) => void;
};

const TodoList = ({ items, onCheck, onDelete }: TodoListProps) => {
  return (
    <List>
      {items.map((item, i) => (
        <ListItem
          key={i}
          secondaryAction={
            <IconButton onClick={() => onDelete(item)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox checked={item.checked} onChange={() => onCheck(item)} />
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
