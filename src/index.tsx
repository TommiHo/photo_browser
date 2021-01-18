import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as PhotoProvider } from "./context/PhotoContext";

import "./styles/index.scss";
import PhotoGallery from "./components/PhotoGallery";
import SinglePhoto from "./components/SinglePhoto";

ReactDOM.render(
  <React.StrictMode>
    <PhotoProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <PhotoGallery />
          </Route>
          <Route path="/photo/:id" component={SinglePhoto} />
        </Switch>
      </Router>
    </PhotoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
