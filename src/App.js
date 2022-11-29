import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './pages/Blog/Blog';
import Home from './pages/home/Home'
import Phones from './pages/home/Product/Phones';
import Error from './pages/error/Error';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/Dashboard';
import AllBuyers from './pages/dashboard/admin/AllBuyers';
import AllSeller from './pages/dashboard/admin/AllSeller';
import AddProduct from './pages/dashboard/seller/AddProduct';
import MyProducts from './pages/dashboard/seller/MyProducts';

const routes = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/phones/:category',
        loader : ({params})=>{
          const category = params.category
          return fetch(`http://localhost:5000/phones/${category}`)
        },
        element : <Phones></Phones>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/signup',
        element : <SignUp></SignUp>
      },
      {
        path : '*',
        element : <Error></Error>
      }
    ]
  },
  {
    path : '/dashboard',
    element : <Dashboard></Dashboard>,
  },
  {
    path : '/allbuyers',
    element : <AllBuyers></AllBuyers>
  },
  {
    path : '/allsellers',
    element : <AllSeller></AllSeller>
  },
  {
    path : '/addproduct',
    element : <AddProduct></AddProduct>
  },
  {
    path : '/myproducts',
    element : <MyProducts></MyProducts>
  }
])

function App() {
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
