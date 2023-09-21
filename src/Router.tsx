import React from 'react';
import Noop from './components/Noop';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" component={<Noop />} />
    </>
));

export default () => <RouterProvider router={router} />;
