import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Review from "./routes/review";
import Login from "./routes/login";
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        "path": "/",
        element: <Root />,
      },
      {
        "path": "reviews/:reviewId",
        element: <Review />,
      },
      {
        "path": "login",
        element: <Login />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
