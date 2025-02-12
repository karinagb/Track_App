import Header from "../components/Header";
import { useFetchTrack } from "../components/FetchTrack";

function Add() {
  const { trackData, isrc, setIsrc, error } = useFetchTrack();

  const addTrack = () => {
    trackData(isrc, "POST");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Add Track</h2>
        <div className="flex items-center space-x-2 w-full max-w-md">
          <input
            type="text"
            placeholder="ISRC"
            value={isrc}
            onChange={(event) => setIsrc(event.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addTrack}
            className="px-4 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
            Add Track
          </button>
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default Add;
