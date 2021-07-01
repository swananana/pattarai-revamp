import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
