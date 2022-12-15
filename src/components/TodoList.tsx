import { useEffect, useState } from "react";
import { getTodoItems } from "../api";
import Button from "./Button";
import InputField from "./InputField";
import List from "./List";

const TodoList = () => {
  // State
  const [value, setValue] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // API Calls
  useEffect(() => {
    // Async/await
    // const fetchData = async () => {
    //   const todoItems = await getTodoItems();
    //   setItems(todoItems);
    // setLoading(false);
    // }
    // fetchData();

    // Then
    getTodoItems().then((items) => {
      setItems(items);
      setLoading(false);
    });
  }, []);

  // Event handlers
  const handleChange = (value: string) => setValue(value);
  const handleClick = () => setItems([...items, value]);

  // Rendering
  return (
    <>
      {loading ? <p>Loading...</p> : <List items={items} />}
      <InputField value={value} onChange={handleChange} />
      <Button onClick={handleClick}>Add to list</Button>
    </>
  );
};

export default TodoList;
