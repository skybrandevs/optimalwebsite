import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Team from "./components/pages/team";
import Footer from "./components/pages/partials/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
