import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './Login&SignUpPages/MatrixPage/Login'
import Matrixpage from './Login&SignUpPages/MatrixPage/Matrixpage';
import Logins from './Login&SignUpPages/SwapLogin&SignUp/Logins';

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
},
{
  path: "matrixpage",
  element: <Matrixpage/>,
},
{
  path: "Login",
  element: <Login/>,
},
{
  path: "Logins",
  element: <Logins/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

reportWebVitals();
