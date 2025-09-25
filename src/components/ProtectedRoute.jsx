// ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;

    // cek expired
    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("token");
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  } catch (err) {
    console.error("Invalid token", err);
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
