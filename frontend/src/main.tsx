import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import "./index.sass";

import Layout from './components/Layout.tsx';
import Menu from './components/main/Menu/Menu.tsx';
import HeaderBlog from "./components/main/Header/components/HeaderBlog.tsx";
import Footer from "./components/main/Footer/Footer.tsx";

import Main from "./page/Main/Main.tsx";
import Blog from "./page/Blog/Blog.tsx";
import NotFound from "./page/404/Err404.tsx";
import About from './page/About/About.tsx';
import ProductPage from './page/Product/Product.tsx';
import CategoryPage from "./page/Category/Category.tsx";
import Authorization from "./page/Authorization/Authorization.tsx";
import Forgot from "./page/Authorization/Forgot.tsx";
import Favorites from "./page/Favorites/Favorites.tsx";
import Basket from "./page/Basket/Basket.tsx";
import Customer from "./page/Customer/Customer.tsx";
import Test from './page/Test.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <Menu />
      <Main />
    </Layout>,
    errorElement: <Layout><NotFound/></Layout>
  },
  {
    path: "/blog",
    element: <><HeaderBlog/><Blog/><Footer isOffer={false}/></>
  },
  {
    path: "/about",
    element: <Layout><About/></Layout>
  },
  {
    path: "/category/:id",
    element: <Layout><CategoryPage/></Layout>
  },
  {
    path: "/product/:id",
    element: <Layout><ProductPage/></Layout>
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/authorization",
    element: <Layout><Authorization/></Layout>
  },
  {
    path: "/forgot",
    element: <Layout><Forgot/></Layout>
  },
  {
    path: "/favorites",
    element: <Layout><Favorites/></Layout>
  },
  {
    path: "/basket",
    element: <Layout><Basket/></Layout>
  },
  {
    path: "/customer",
    element: <Layout><Customer/></Layout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
