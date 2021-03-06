import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Spinner } from '../app/components/Spinner'
import SetupBuilder from '../app/container/SetupBuilder/SetupBuilder'
const HomeRouter = lazy(() => import("./HomeRouter"))


export const Routes = () => {
  
  return (
    <Suspense fallback={<Spinner />}>
    <Switch>
      {
        /* Redirect from root URL to /quick-start. */
        <Redirect exact from="/" to="/home" />
      }
      <Route path="/home" component={HomeRouter} />
      <Route path="/organisation" component={SetupBuilder} />
    </Switch>
  </Suspense>
  );
};
