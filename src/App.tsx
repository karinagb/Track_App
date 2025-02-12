import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Login from "./pages/Login";
import Search from './pages/Search'
import Add from './pages/Add'


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
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
