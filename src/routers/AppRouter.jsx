import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";
import { PrivateRoute } from "./PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={logged}>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={logged}>
                <DashboardRouters />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
