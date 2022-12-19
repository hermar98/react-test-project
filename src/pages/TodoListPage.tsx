import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { addTodoItem, deleteTodoItem, getTodoItems } from "../api";
import AddTodoButton from "../components/AddTodoButton";
import TodoInputField from "../components/TodoInputField";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
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
        <Typography>Loading...</Typography>
      ) : (
        <TodoList items={items} onDelete={handleDeleteItem} />
      )}
      {error && <p>{error}</p>}
      <Box display="flex" mt={5}>
        <TodoInputField value={input} onChange={handleInputChange} />
        <AddTodoButton onClick={handleAddItem}>Add to list</AddTodoButton>
      </Box>
    </>
  );
};

export default TodoListPage;
