import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoItemPage from "./pages/TodoItemPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
    </div>
  );
}

export default App;
