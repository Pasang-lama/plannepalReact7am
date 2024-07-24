import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./scss/style.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './pages/Aboutus.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <Aboutus/>,
  },
  {
    path: "/*",
    element: <Error/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
