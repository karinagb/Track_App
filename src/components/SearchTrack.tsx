import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchTrack() {
  const [isrc, setIsrc] = useState("");
  const [error, setError] = useState("");
  const [buttonChange, setButtonChange] = useState(false);
  const navigate = useNavigate();

  const searchingTrack = async () => {
    setError("");

    try {
      const response = await fetch(
        `https://spotify-be-b07j.onrender.com/public/swagger-ui/index.html#/Admin/getTracK?isrc=${isrc}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        navigate(`/track/${isrc}`);
      } else {
        setError("Could not find the track. Do you want to add it?");
        setButtonChange(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <h2> SearchTrack</h2>
      <input
        type="text"
        placeholder="ISRC"
        value={isrc}
        onChange={(e) => setIsrc(e.target.value)}
      />

      <button onClick={searchingTrack}>
        {buttonChange ? "Add Track" : "Search Track"}
      </button>
      {error && <p>{error}</p>}
    </>
  );
}

export default SearchTrack;
