import NavBar from "../components/NavBar";
import User from "../components/User";

function Header() {
  return (
    <header className="flex items-center justify-between bg-black p-4 text-white">
      <NavBar />
      <User />
    </header>
  );
}

export default Header;
