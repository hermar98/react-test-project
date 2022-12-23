import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoItem } from "../api";
import { TodoItem } from "../api/types";

interface TodoItemPageParams {
  id: string;
}

const TodoItemPage = () => {
  const { id } = useParams<TodoItemPageParams>();
  const [todoItem, setTodoItem] = useState<TodoItem>();

  useEffect(() => {
    getTodoItem(Number(id)).then((todoItem) => setTodoItem(todoItem));
  }, []);

  return todoItem ? <p>{todoItem.name}</p> : <p>Loading...</p>;
};

export default TodoItemPage;
