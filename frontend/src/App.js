import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import PhotoDetail from "./components/PhotoDetail";
import MyPhotoDetail from "./components/MyPhotoDetail";
import Profile from "./components/Profile";
import MyPhotos from "./components/MyPhotos";
import MyFaves from "./components/MyFaves";
import MyFaveDetail from "./components/MyFaveDetail";
import Footbar from "./components/Footbar";
import SearchResult from "./components/SearchResult";
import SearchDetail from "./components/SearchDetail";


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
          <Route path="/my" exact>
            <Profile />
          </Route>
          <Route path="/my/photos" exact>
            <MyPhotos />
          </Route>
          <Route path="/my/photos/:photoId">
            <MyPhotoDetail />
          </Route>
          <Route path="/my/faves" exact>
            <MyFaves />
          </Route>
          <Route path="/my/faves/:photoId" exact>
            <MyFaveDetail />
          </Route>
          <Route path="/photos/:photoId">
            <PhotoDetail />
          </Route>
          <Route path="/search/:searchQuery" exact>
            <SearchResult />
          </Route>
          <Route path="/search/results/:photoId">
            <SearchDetail />
          </Route>
        </Switch>
      )}
      <Footbar />
    </>
  );
}

export default App;
