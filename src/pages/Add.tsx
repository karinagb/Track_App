import Header from "../components/Header";
import { useFetchTrack } from "../components/FetchTrack";

function Add() {
  const { trackData, isrc, setIsrc, error } = useFetchTrack();

  const addTrack = () => {
    trackData(isrc, "POST");
  };

  return (
    <>
      <Header />
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
