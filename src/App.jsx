import React, { useState } from "react";
import Home from "./component/Home/Home";
import Layout from "./component/Layout/Layout";
import { createBrowserRouter, RouterProvider ,useLocation } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Portfolio from './component/Portfolio/Portfolio'
export default function App() {

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home/>},
        { path: "/home", element: <Home/>},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'/portfolio',element:<Portfolio/>},
        { path: "*", element: <NotFound/>}
      ]
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
