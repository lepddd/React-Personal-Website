import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Projects, Home, About } from "./routes";
import { globalStyles } from "../stitches.config";
import { RootLayout } from "./routes/layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/projetos" element={<Projects />} />
    </Route>
  )
);

export const App = () => {
  globalStyles();
  return <RouterProvider router={router} />;
};
