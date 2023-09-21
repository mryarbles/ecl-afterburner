# Routing Configuration

## React Router
(React Router v6)["https://reactrouter.com/en/main"]  will be used for routing url to the correct application state.

The highest level routing will be configured in 'src/Router.tsx'. 

Module routing can/should be configured within a module's route.tsx file. These route modules must export a function to returns
a React.Fragment containing multiple [<Route>](https://reactrouter.com/en/main/components/route) or a single [<Route>](https://reactrouter.com/en/main/components/route).
Execute that function and render the result in `{}`.
```javascript
// In 'module/auth/routes'
const getAuthRoutes = () => (
  <>
    <Route path="login" element={<LoginPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
  </>
);

import getAuthRoutes from 'modules/auth/routes';
// ...
return (
  <Routes>
    {...getAuthRoutes()}
  </Routes>
)
```
If you try to render this using a React component you will get error.
```javascript
// This will not work!!!!!

// In 'module/auth/routes'
const AuthRoutes = () => (
  <>
    <Route path="login" element={<LoginPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
  </>
);

import ExampleRoutes from 'module/example/routes';
// ...
return (
  <Routes>
    <AuthRoutes />
  </Routes>
)
```
