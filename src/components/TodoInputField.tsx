import { TextField } from "@mui/material";

type TodoInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const TodoInputField = ({ value, onChange }: TodoInputFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.value);

  return (
    <TextField
      value={value}
      label="New todo item"
      variant="outlined"
      onChange={handleChange}
      type="text"
      sx={{ mr: 2 }}
    />
  );
};

export default TodoInputField;
