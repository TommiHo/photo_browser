import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as PhotoProvider } from "./context/PhotoContext";

import "./styles/index.scss";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <PhotoProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </PhotoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
