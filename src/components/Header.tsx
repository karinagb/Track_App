import NavBar from "../components/NavBar";
import User from "../components/User";

function Header() {
  return (
    <div className= 'flex row'>
      <NavBar/>
      <User/>
    </div>
  );
}

export default Header;