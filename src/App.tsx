import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User } from "./api/types";
import NavBar from "./components/NavBar";
import TodoItemPage from "./pages/TodoItemPage";
import TodoListPage from "./pages/TodoListPage";
import { UserContext } from "./UserContext";

function App() {
  const user: User = {
    username: "adam123",
    isAdmin: true,
  };

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <TodoListPage />
            </Route>
            <Route exact path="/:id">
              <TodoItemPage />
            </Route>
            <Route path="*">
              <p>404: Page Not Found</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
