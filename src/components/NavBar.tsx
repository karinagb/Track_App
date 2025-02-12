import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`absolute top-16 left-0 w-full bg-black text-center p-4 md:relative md:top-0 md:flex md:space-x-6 md:p-0 md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}>
          <button
            onClick={() => navigate("/Search")}
            className="block md:inline hover:text-green-400 transition">
            Search
          </button>
          <button
            onClick={() => navigate("/Add")}
            className="block md:inline hover:text-green-400 transition">
            Add
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
