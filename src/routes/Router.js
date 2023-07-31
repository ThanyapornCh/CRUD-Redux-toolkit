import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import Products from '../pages/Products';
import Signin from '../pages/Signin';
import Cart from '../pages/Cart';

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    element: <Nav />,
    children: [
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/',
        element: <Products />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
