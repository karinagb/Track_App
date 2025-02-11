import Header from "../components/Header";
import { useFetchTrack } from "../components/FetchTrack";
import { useNavigate } from "react-router-dom";


function Search() {
  const navigate = useNavigate();

  const { trackData, isrc, setIsrc, track, error } = useFetchTrack();
console.log('track', track)

  const searchTrack = () => {
    trackData(isrc, "GET");
  };

  return (
    <>
      <Header />
      <h2>Search</h2>{" "}
      <input
        type="text"
        placeholder="ISRC"
        value={isrc}
        onChange={(event) => setIsrc(event.target.value)}
      />
      <button onClick={searchTrack}>Search Track</button>
      {track ? (
        <>
          <h2>Track Info</h2>
          <ul>
            <li>{`Track Name: ${track.name}`}</li>
            <li>{`Artist Name: ${track.artistName}`}</li>
            <li>{`Album Name: ${track.albumName}`}</li>
            <li>{`Content Indicator: ${track.contentIndicator}`}</li>
            <li>{`Playback Seconds: ${track.playbackSeconds}`}</li>
            <li>
              Cover Image:{" "}
              <img src={track.images[0].url} alt={track.name} width={200} />
            </li>
          </ul>
        </>
      ) : (
        <>
          {error && <p>{error}</p>}
          {!track && (
            <button onClick={() => navigate("/Add")}>Add Track</button>
          )}
        </>
      )}
    </>
  );
}

export default Search;
