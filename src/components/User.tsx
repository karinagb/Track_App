import { useNavigate } from "react-router-dom";
import { decodeToken } from "../utils";

function User() {
  const token = localStorage.getItem("accessToken");
  const userData = decodeToken(token);
  const userName = userData.name;
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  console.log("userData.name", userData.name);
  return (
    <>
      <p>Welcome {userName}</p>
      <button onClick={() => logOut()}>Log Out</button>
    </>
  );
}

export default User;
