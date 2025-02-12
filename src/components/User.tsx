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
    <div className="flex items-center space-x-4">
      <p className="text-white font-medium">Welcome, {userName}</p>
      <button
        onClick={() => logOut()}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition">
        Log Out
      </button>
    </div>
  );
}

export default User;
