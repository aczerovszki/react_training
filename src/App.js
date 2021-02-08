import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
