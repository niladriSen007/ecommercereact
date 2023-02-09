import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  const Layout = () =>(
    <div>
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  )

  const router = createBrowserRouter([
    {
      path: "/",
      element:(
           <Layout />
      ),
      children:[
        {
          path:"/",
          element:<Home  />, 
        },
        {
          path:"/about",
          element:<About  />, 
        },
        {
          path:"/products",
          element:<ProductsPage  />, 
        },
        {
          path:"/contact",
          element:<Contact  />, 
        },
        {
          path:"/product/:id",
          element:<SingleProduct  />, 
        },
        {
          path:"/cart",
          element:<Cart  />, 
        },
        {
          path:"*",
          element:<Error  />, 
        },
      ]
    },
  ]);
  return (
    < RouterProvider router={router} />
     );
}

export default App