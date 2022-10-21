import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useRoutes from "./hooks/routes.hook";
import { useSelector } from "react-redux";
import "materialize-css";

function App() {
  const isAuthenticated = !!useSelector(state => state.token.currentToken)
  const routes = useRoutes(isAuthenticated)

  return (
    <Router>
      <div className="container">{routes}</div>;
    </Router>
  );
}

export default App;
