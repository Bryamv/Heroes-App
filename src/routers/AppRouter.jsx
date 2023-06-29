import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<DashboardRouters />} />
        </Routes>
      </div>
    </Router>
  );
};
