import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Story from "./pages/story";

export default function Routing() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/story/:storyId" component={Story} />
              <Route path="*">Page not found</Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
