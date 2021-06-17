import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Project from "./pages/Project"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/projects" component={ Project } />
      </Switch>
    </Router>
    
  );
}


export default App;
