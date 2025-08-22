// src/Routes/AllRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import NoPage from "../Pages/NoPage";
import Products from "../Pages/Products";
import Description from "../Pages/Description";
import ProtectedRoute from "../components/ProtectedRoute";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/description/:id/:title" element={<Description />} />

      {/* Protected Routes */}
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AllRoutes;
