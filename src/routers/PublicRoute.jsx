import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
export const PublicRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
