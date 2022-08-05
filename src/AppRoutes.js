import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" exact="true" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
