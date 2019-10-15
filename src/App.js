import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Team from "./components/pages/team";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Careers from "./components/pages/careers";
import Footer from "./components/pages/partials/footer";
import Privacy from "./components/pages/privacy";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/team" component={Team}/>
        <Route path="/service" component={Service}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/careers" component={Careers}/>
        <Route path="/privacy" component={Privacy}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
