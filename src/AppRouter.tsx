import { BrowserRouter, Redirect, Route } from "react-router-dom";
import App from "./App";
import { DishScreen } from "./screens/DishScreen";
import { SportsScreen } from "./screens/SportsScreen";

const appPaths = {
  sports: "/sports",
  food: "/dishes",
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route path={appPaths.sports} component={SportsScreen} />
      <Route path={appPaths.food} component={DishScreen} />

      <Redirect from="/" to={appPaths.sports} />
    </BrowserRouter>
  );
};

export { AppRouter, appPaths };
