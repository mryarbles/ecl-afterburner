import RootLayout from 'components/layouts/RootLayout.tsx';
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import getAuthRoutes from 'modules/auth/routes.tsx';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      {getAuthRoutes()}
    </Route>,
  ),
);

export default () => <RouterProvider router={router} />;
