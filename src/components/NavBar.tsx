import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate("/Search")}
            className="hover:text-green-400 transition">
            Search
          </button>
          <button
            onClick={() => navigate("/Add")}
            className="hover:text-green-400 transition">
            {" "}
            Add
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
