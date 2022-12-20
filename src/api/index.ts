import { TodoItem } from "./types";

let todoItems: TodoItem[] = [
  {
    id: 1,
    name: "Shopping",
    checked: true,
  },
  {
    id: 2,
    name: "Running",
    checked: false,
  },
  {
    id: 3,
    name: "Sleeping",
    checked: false,
  },
];

export const getTodoItems = async (shouldFail = false) => {
  return await new Promise<TodoItem[]>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Fetching todo items failed."));
      resolve(todoItems);
    }, 1000)
  );
};

export const getTodoItem = async (itemId: number, shouldFail = false) => {
  return await new Promise<TodoItem>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Fetching todo item failed."));
      const item = todoItems.find((item) => item.id === itemId);
      if (!item)
        return reject(new Error(`Couldn't find todo item with id ${itemId}`));
      resolve(item);
    }, 1000)
  );
};

export const addTodoItem = async (
  item: Omit<TodoItem, "id">,
  shouldFail = false
) => {
  return await new Promise<TodoItem>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Adding todo item failed."));
      const newItem: TodoItem = {
        id: todoItems.length + 1,
        ...item,
      };
      todoItems = [...todoItems, newItem];
      resolve(newItem);
    }, 1000)
  );
};

export const updateTodoItem = async (item: TodoItem, shouldFail = false) => {
  return await new Promise<TodoItem>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Updating todo item failed."));
      todoItems = [...todoItems, item];
      resolve(item);
    }, 1000)
  );
};

export const deleteTodoItem = async (itemId: number, shouldFail = false) => {
  return await new Promise<number>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Deleting todo item failed."));
      todoItems = todoItems.filter((item) => item.id !== itemId);
      resolve(itemId);
    }, 1000)
  );
};
