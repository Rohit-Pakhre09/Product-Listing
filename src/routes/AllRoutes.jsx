import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import NoPage from "../Pages/NoPage";
import Products from "../Pages/Products";
import Description from "../Pages/Description";

const allRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/description/:id/:title",
    element: <Description />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];

const AllRoutes = () => {
  return (
    <Routes>
      {allRoutes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
