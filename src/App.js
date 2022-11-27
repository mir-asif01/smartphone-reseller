import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './pages/Blog/Blog';
import Home from './pages/home/Home'
import Phones from './pages/home/Product/Phones';
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
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
