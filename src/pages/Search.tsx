import Header from "../components/Header";
import { useFetchTrack } from "../components/FetchTrack";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const { trackData, isrc, setIsrc, track, error } = useFetchTrack();

  const searchTrack = () => {
    trackData(isrc, "GET");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Search</h2>
        <div className="flex items-center space-x-2 w-full max-w-md">
          <input
            type="text"
            placeholder="ISRC"
            value={isrc}
            onChange={(event) => setIsrc(event.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={searchTrack}
            className="inline-flex whitespace-nowrap px-4 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
            Search Track
          </button>
        </div>

        {track ? (
          <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Track Info
            </h2>
            <ul className="space-y-2">
              <li>{`Track Name: ${track.name}`}</li>
              <li>{`Artist Name: ${track.artistName}`}</li>
              <li>{`Album Name: ${track.albumName}`}</li>
              <li>{`Content Indicator: ${track.contentIndicator}`}</li>
              <li>{`Playback Seconds: ${track.playbackSeconds}`}</li>
              <li>
              <span>Cover Image:</span>
                <img
                  src={track.images[0].url}
                  alt={track.name}
                  width={200}
                  className="mt-2 rounded-lg w-full max-w-xs"
                />
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-6 text-center">
            {error && <p className="text-red-500">{error}</p>}

            {!track && (
              <button
                onClick={() => navigate("/add")}
                className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition">
                Add Track
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
