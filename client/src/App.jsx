import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useRoutes from "./routes";
import { useSelector } from "react-redux";
import "materialize-css";

function App() {
  const isAuthenticated = !!useSelector((state) => state.token.currentToken)
  console.log(isAuthenticated);
  const routes = useRoutes(isAuthenticated)

  return (
    <Router>
      <div className="container">{routes}</div>;
    </Router>
  );
}

export default App;
