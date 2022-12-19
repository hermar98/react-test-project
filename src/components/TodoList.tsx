import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

type TodoListProps = {
  items: string[];
  onDelete: (item: string) => void;
};

const TodoList = ({ items, onDelete }: TodoListProps) => {
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
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
