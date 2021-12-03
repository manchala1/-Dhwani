import "./App.css";
import Card from "./components/card";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
