import Home from "./pages/Home";
import SetQuiz from "./pages/SetQuiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SetQuestion from "./pages/SetQuestion";
import QuizList from "./pages/QuizList";

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
            <Route path="/home" exact render={() => <Home />} />
            <Route path="/" exact render={() => <Login />} />
            <Route path="/signup" exact render={() => <SignUp />} />
            <Route path="/set-quiz" exact render={() => <SetQuiz />} />
            <Route path="/set-question" exact render={() => <SetQuestion />} />
            <Route path="/update-quiz" exact render={() => <QuizList />} />
            {/* <Route path="/signup" exact="exact" component={Signup} />
            <Route path="/chat" exact="exact" component={Chat} />  */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
