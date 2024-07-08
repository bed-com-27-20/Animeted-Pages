import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Matrixpage from './Login&SignUpPages/MatrixPage/Matrixpage';

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
},
{
  path: "matrixpage",
  element: <Matrixpage/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

reportWebVitals();
