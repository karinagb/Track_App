import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SearchTrack from "./components/SearchTrack";
import TrackInfo from "./components/TrackInfo";

function App() {
  return (
    <Router>
      <h1> Track App</h1>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/search" element={<SearchTrack />} />
        <Route path="/track/:irsc" element={<TrackInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
