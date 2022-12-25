import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SigninPage from "./pages/auth/SigninPage";
import TaskPage from "./pages/tasks/TaskPage";

function App() {
  let loggedIn = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/task" component={TaskPage} />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>
        {/* Login Route */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signin">
          <SigninPage />
        </Route>
        <Route exact path="/task">
          <TaskPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
