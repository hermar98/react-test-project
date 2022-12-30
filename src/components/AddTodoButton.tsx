import { Button } from "@mui/material";

type AddTodoButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

const AddTodoButton = ({ onClick, children }: AddTodoButtonProps) => {
  return (
    <Button
      data-cy="add-item-button"
      variant="contained"
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};

export default AddTodoButton;
