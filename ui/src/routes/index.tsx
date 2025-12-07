import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { HomePage, Layout } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
