import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface iTrack {
  name: string;
  artistName: string;
  albumName: string;
  contentIndicator: string;
  playbackSeconds: number;
  images: { url: string }[];
}

function TrackPage() {
  const [error, setError] = useState("");
  const [isrc, setIsrc] = useState("");
  const [isrcFound, setIsrcFound] = useState(true);
  const [fetchMethod, setFetchMethod] = useState<"GET" | "POST">("GET");
  const [hasSearched, setHasSearched] = useState(false);
  const [track, setTrack] = useState<iTrack | null>(null);
const navigate = useNavigate();

  const trackSearch = async () => {
    setError("");
    setHasSearched(true); 
    setFetchMethod("GET");

    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://spotify-be-b07j.onrender.com/spotify/track?isrc=${isrc}`,
        {
          method: fetchMethod,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        setTrack(data);
        navigate(`/track/${isrc}`);
      } else {
        setError("Could not find the track. Do you want to add it?");
        setIsrcFound(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <h2>Search Track</h2>
      <input
        type="text"
        placeholder="ISRC"
        value={isrc}
        onChange={(event) => setIsrc(event.target.value)}
      />

      <button onClick={trackSearch} >Search Track</button>
      {isrcFound && track ? (
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
          {hasSearched && !track && !isrcFound && (
            <button onClick={() => setFetchMethod("POST")}>Add Track</button>
          )}
        </>
      )}
    </>
  );
}

export default TrackPage;
