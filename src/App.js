import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './pages/Blog/Blog';
import Home from './pages/home/Home'
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
