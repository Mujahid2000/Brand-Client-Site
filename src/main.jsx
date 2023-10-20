import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Parent-Components/Main';
import Home from './Parent-Components/Home';
import AddProductPage from './Parent-Components/AddProduct';
import Mycarts from './Parent-Components/Mycarts';
import Login from './Parent-Components/Login';
import Register from './Parent-Components/Register';
import Products from './Components/Products';
import BrandCard from './Parent-Components/BrandCard';
import Brand from './Parent-Components/Brand';
import Error from './Parent-Components/Error';
import Contact from './Parent-Components/Contact';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvide from './AuthProvider/AuthProvider';


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
        element: <Mycarts></Mycarts>
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
        element: <Products></Products>,
        
      },
      {
        path: '/products',
        element: <BrandCard></BrandCard>
      },
      {
        path: '/brand',
        element: <Brand></Brand>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide><RouterProvider router={router}></RouterProvider></AuthProvide>
  </React.StrictMode>,
)
