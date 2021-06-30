import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/" exact="exact" component={Home} />
            {/* <Route path="/login" exact="exact" component={Login} />
            <Route path="/signup" exact="exact" component={Signup} />
            <Route path="/chat" exact="exact" component={Chat} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
