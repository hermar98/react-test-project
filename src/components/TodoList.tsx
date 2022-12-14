import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import List from "./List";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(["1", "2", "3", "4"]);

  const handleChange = (value: string) => setValue(value);

  const handleClick = () => {
    setItems([...items, value]);
  };

  return (
    <>
      <List items={items} />
      <InputField value={value} onChange={handleChange} />
      <Button onClick={handleClick}>Add to listdsfsdfds</Button>
    </>
  );
};

export default TodoList;
