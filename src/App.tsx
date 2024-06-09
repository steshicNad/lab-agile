import { Routes, Route } from "react-router-dom";
import '@/styles/App.sass'
import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from 'core-digital-marketplace-dashboards/src/components/Page'

import Home from "core-digital-marketplace-dashboards/src/screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page wide title="Dashboard" />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex"> 
      <React.StrictMode>
        <RouterProvider router={router} /> 
      </React.StrictMode>,
    </div>
  )
}

export default App
