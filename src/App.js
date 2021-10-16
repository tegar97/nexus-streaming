import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "Pages/Home/Home";
import Category from "Pages/Category/Category";
import SearchResult from "Pages/SearchResult/SearchResult";
import VideoDetail from "Pages/video-detail/video-detail";
import Channels from "Pages/Channels/Channels";
import ScrollTop from "helper/ScrollTop";
import AllGames from "Pages/AllGames/AllGame";
import Trending from "Pages/Trending/Trending";
function App() {
  return (
    <Router>
      <ScrollTop />
      <Switch>
        <Route path="/search">
          <SearchResult />
        </Route>
        <Route path="/video/:id">
          <VideoDetail />
        </Route>
        <Route path="/games">
          <AllGames />
        </Route>
        <Route path="/game/:slug">
          <Category />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/channels/:slug">
          <Channels />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
