import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvide from './AuthProvider/AuthProvider';
import Details from './Components/Details';
import Products from './Components/Products';
import UpdateForm from './Components/UpdateForm';
import './index.css';
import AddProductPage from './Parent-Components/AddProduct';
import Contact from './Parent-Components/Contact';
import Error from './Parent-Components/Error';
import Home from './Parent-Components/Home';
import Login from './Parent-Components/Login';
import Main from './Parent-Components/Main';
import Mycarts from './Parent-Components/Mycarts';
import Register from './Parent-Components/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Fake.json'),
      },
      {
        path: '/products',
        element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Mycarts></Mycarts></PrivateRoute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/product/:brand',
        element: <PrivateRoute><Products></Products></PrivateRoute>
      },            
      {
        path: '/detail/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide><RouterProvider router={router}></RouterProvider></AuthProvide>
  </React.StrictMode>,
)
