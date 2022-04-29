import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import Explore from "./components/Explore";
import PhotoDetail from "./components/PhotoDetail";
import Profile from "./components/Profile";
import Upload from "./components/Upload";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <FrontPage isLoaded={isLoaded} />
          </Route>
          {/* <Route path="/" exact>
            <Explore />
          </Route> */}
          <Route path="/users/:userId" exact>
            <Profile />
          </Route>
          <Route path="/users/:userId/photos/new">
            <Upload />
          </Route>
          <Route path="/photos/:photoId">
            <PhotoDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;