import { Routes, Route, Outlet } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

import Home from '@/views/HomePage/Home.tsx'
import Settings from '@/views/SettingsPage/Settings.tsx'
import Login from '@/views/LoginPage/Login.tsx'
import MainLayout from '@/views/MainLayout/MainLayout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    children: [
      {
        index: true, // Этот маршрут будет отображаться по умолчанию
        element: <Home />,
      },
      {
        path: 'settings',
        element: <Settings/>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);


function App() {
  return (
    <> 
      <React.StrictMode>
        <RouterProvider router={router} />           
      </React.StrictMode>
    </>
  )
}

export default App
