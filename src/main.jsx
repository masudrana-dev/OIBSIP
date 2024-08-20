import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home';
import Todo from './Component/Todo';
import Calculator from './Component/Calculator';
import Tribute from './Component/Tribute';
import Login from './Component/Login';
import Registration from './Component/Registration';
import './firebasae_config'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
  {
    path: "/tribute",
    element: <Tribute />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
