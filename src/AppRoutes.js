import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/home" exact element={<Home />} />
      <Route path="/" exact element={<Index />} />
      <Route path="*" element={<NotFound />} />
      <Redirect to="/" />
    </Switch>
  );
};
