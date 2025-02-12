import Header from "../components/Header";
import { useFetchTrack } from "../components/FetchTrack";
import { TrackInfo } from "../components/TrackInfo";
import { Loading } from "../components/Loading";

function Add() {
  const { trackData, isrc, setIsrc, error, track, loading } = useFetchTrack();
  const addTrack = () => {
    trackData(isrc, "POST");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Add Track</h2>
        <div className="flex items-center space-x-2 w-auto max-w-md">
          <input
            type="text"
            placeholder="ISRC"
            value={isrc}
            onChange={(event) => setIsrc(event.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addTrack}
            className="inline-flex whitespace-nowrap px-4 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
            Add Track
          </button>
        </div>
        {loading && <Loading />}
        {track && (
          <div className="mt-6 bg-gray-900 py-6 rounded-lg shadow-lg text-center">
            <p className="text-green-400 text-lg font-semibold">
              Track added successfully!
            </p>
            <TrackInfo track={track} />
          </div>
        )}
        {error && (
          <div>{error && <p className="mt-4 text-red-500">{error}</p>} </div>
        )}
      </div>
    </div>
  );
}

export default Add;
