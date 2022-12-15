let todoItems = ["Shopping", "Running", "Sleeping"];

export const getTodoItems = async () => {
  return await new Promise<string[]>((resolve) =>
    setTimeout(() => {
      resolve(todoItems);
    }, 1000)
  );
};

export const addTodoItem = async (item: string) => {
  return await new Promise<string[]>((resolve) =>
    setTimeout(() => {
      todoItems = [...todoItems, item];
      resolve(todoItems);
    }, 1000)
  );
};

export const deleteTodoItem = async (item: string) => {
  return await new Promise<string[]>((resolve) =>
    setTimeout(() => {
      todoItems = todoItems.filter((i) => i !== item);
      resolve(todoItems);
    }, 1000)
  );
};
