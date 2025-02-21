import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface iTrack {
  name: string;
  artistName: string;
  albumName: string;
  contentIndicator: string;
  playbackSeconds: number;
  images: { url: string }[];
  message: string;
}

export function useFetchTrack() {
  const [error, setError] = useState("");
  const [isrc, setIsrc] = useState("");
  const [track, setTrack] = useState<iTrack | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const trackData = async (isrc: string, method: string) => {
    setError("");
    setLoading(true);

    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://spotify-be-b07j.onrender.com/spotify/track?isrc=${isrc}`,
        {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
        }
        setTrack(data);
        setLoading(false);
        return;
      }
      if (response.status === 401) {
        localStorage.removeItem("accessToken");
        navigate("/login");
        return;
      }
      if (
        response.status === 404 ||
        response.status === 409 ||
        response.status === 500
      ) {
        const errorData = await response.json();
        setError(errorData.message);
        setTrack(null);
        setLoading(false);
      } else {
        setError("Could not find the track. Do you want to add it?");
        setTrack(null);
        setLoading(false);
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setError("Something went wrong. Please try again.");
      setTrack(null);
      setLoading(false);

    }
  };

  return { trackData, isrc, setIsrc, track, error, loading };
}

export default useFetchTrack;
