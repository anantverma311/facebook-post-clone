import React from "react";
import FeedPostContainer from "./FeedPostContainer";
import NavBar from "./Navbar";
import ComposePost from "./ComposePost";
import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    // client side rendering router in the dom using react-router-dom
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={FeedPostContainer} />
          <Route path="/compose" component={ComposePost} />
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
