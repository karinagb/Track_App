import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import TrackPage from "./components/TrackPage";

import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<TrackPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
