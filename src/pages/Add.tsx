import NavBar from "../components/NavBar";
import { useFetchTrack } from "../components/FetchTrack";

function Add() {
  const { trackData, isrc, setIsrc, error } = useFetchTrack();

  const addTrack = () => {
    trackData(isrc, "POST");
  };

  return (
    <>
      <NavBar />
      <h1>Add</h1>
      <input
        type="text"
        placeholder="ISRC"
        value={isrc}
        onChange={(event) => setIsrc(event.target.value)}
      />
      <button onClick={addTrack}>Add Track</button>
      {error && <p>{error}</p>}
    </>
  );
}

export default Add;
