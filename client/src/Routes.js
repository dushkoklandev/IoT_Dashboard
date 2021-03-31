import { BrowserRouter, Switch, Route } from "react-router-dom";

// Routing
import DashboardRoute from "./routing/DashboardRoute";

// Screens
import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DashboardRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
