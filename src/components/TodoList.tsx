import { useEffect, useState } from "react";
import { addTodoItem, deleteTodoItem, getTodoItems } from "../api";
import Button from "./Button";
import InputField from "./InputField";
import List from "./List";

const TodoList = () => {
  // State
  const [input, setInput] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Data fetching
  useEffect(() => {
    // Async/await
    // const fetchData = async () => {
    //   try {
    //     const todoItems = await getTodoItems();
    //     setItems(todoItems);
    //   } catch (error: unknown) {
    //     setError((error as Error).message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchData();

    // Then
    getTodoItems()
      .then((items) => setItems(items))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // Event handlers
  const handleInputChange = (input: string) => setInput(input);

  const handleAddItem = () => {
    addTodoItem(input)
      .then((items) => setItems(items))
      .catch((error: Error) => setError(error.message));
  };

  const handleDeleteItem = (item: string) => {
    deleteTodoItem(item)
      .then((items) => setItems(items))
      .catch((error: Error) => setError(error.message));
  };

  // Rendering
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List items={items} onDelete={handleDeleteItem} />
      )}
      {error && <p>{error}</p>}
      <InputField value={input} onChange={handleInputChange} />
      <Button onClick={handleAddItem}>Add to list</Button>
    </>
  );
};

export default TodoList;
