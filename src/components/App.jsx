import React from "react";
import FeedPostContainer from "./FeedPostContainer";
import NavBar from "./Navbar";
import ComposePost from "./ComposePost";
import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import SignInPage from "./SignInPage";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignInPage} />
          <Route path="/" exact component={RegisterPage} />
          <Route path="/compose" component={ComposePost} />
          <Route path="/about" component={AboutPage} />
          <Route path="/feed" component={FeedPostContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
