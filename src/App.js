import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test1 from "./components/Test1";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/test1">
            
            <Test />

          </Route>
          <Route path="/test2">
          

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
