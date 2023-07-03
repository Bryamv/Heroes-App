import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();

  localStorage.setItem("lastPath", location.pathname);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
