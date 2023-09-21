import { Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const getAuthRoutes = () => {
  const LoginPage = lazy(() => import('./LoginPage'));
  const ResetPage = lazy(() => import('modules/auth/ResetPasswordPage'));
  return (
    <>
      <Route
        path="login"
        element={
          <Suspense fallback={<div>Loading</div>}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path="reset-password" element={<ResetPage />} />
    </>
  );
};
export default getAuthRoutes;
