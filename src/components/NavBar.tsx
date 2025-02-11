import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/Search")}>Search</button>
      <button onClick={() => navigate("/Add")}> Add</button>
    </>
  );
}

export default NavBar;
