import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home'
import Destination from './views/Destination/Destination'
import Blogs from './views/Blogs/Blogs'
import About from './views/About/About';
import Contact from './views/Contact/Contact'
import Shop from './views/Shop/Shop';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Wishcard from './views/Wishcard/Wishcard';
import MainHome from './views/MainHome/MainHome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainHome/>
    },
  {
      path: '/home',
      element: <Home/>
  },
  {
      path: '/destination',
      element: <Destination/>
  },
  {
      path: '/blogs',
      element: <Blogs/>
  },
  {
      path: '/about',
      element: <About/>
  },
  {
      path: '/contact',
      element: <Contact/>
  },
  {
      path: '/shop',
      element: <Shop/>
  },
  {
      path: '/signup',
      element: <Signup/>
  },
  {
      path: '/login',
      element: <Signup/>
  },
  {
    path: 'wishcard',
    element : <Wishcard/>
  },
  
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
     <RouterProvider router={router} />
  </>
  
);


