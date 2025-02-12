import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col space-y-6 items-center justify-center h-[80vh] text-center">
        <h1 className="text-5xl font-extrabold text-green-500">Track App</h1>
        <p className="text-gray-300 mt-3 text-lg max-w-md">
          Search for your favorite tracks by ISRC code and get instant details.
        </p>
        <button
          onClick={() => navigate("/search")}
          className="inline-flex whitespace-nowrap px-4 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
          Search Track
        </button>
      </div>
    </div>
  );
}

export default Home;
