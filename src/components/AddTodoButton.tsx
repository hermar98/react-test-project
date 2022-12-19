import { Button } from "@mui/material";

type AddTodoButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

const AddTodoButton = ({ onClick, children }: AddTodoButtonProps) => {
  return (
    <Button variant="contained" onClick={() => onClick()}>
      {children}
    </Button>
  );
};

export default AddTodoButton;
