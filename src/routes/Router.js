import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Products from '../pages/Products';
import Signin from '../pages/Signin';
import Cart from '../pages/Cart';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/signin',
    element: (
      <RedirectIfAuthenticate>
        <Signin />
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
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
