import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as PhotoProvider } from "./context/PhotoContext";

import "./styles/index.scss";
import PhotoGallery from "./views/PhotoGalleryView";
import SinglePhoto from "./views/SinglePhotoView";

export default function App(): JSX.Element {
  return (
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
    </React.StrictMode>
  );
}
