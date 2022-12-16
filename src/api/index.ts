let todoItems = ["Shopping", "Running", "Sleeping"];

export const getTodoItems = async (shouldFail = false) => {
  return await new Promise<string[]>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Fetching todo items failed."));
      resolve(todoItems);
    }, 1000)
  );
};

export const addTodoItem = async (item: string, shouldFail = false) => {
  return await new Promise<string[]>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Adding todo item failed."));
      todoItems = [...todoItems, item];
      resolve(todoItems);
    }, 1000)
  );
};

export const deleteTodoItem = async (item: string, shouldFail = false) => {
  return await new Promise<string[]>((resolve, reject) =>
    setTimeout(() => {
      if (shouldFail) return reject(new Error("Deleting todo item failed."));
      todoItems = todoItems.filter((i) => i !== item);
      resolve(todoItems);
    }, 1000)
  );
};
