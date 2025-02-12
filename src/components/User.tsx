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

  return (
    <div className="flex flex-row items-center space-x-2 md:space-x-4 md:space-y-0">
      <p className="text-white font-medium text-center md:text-left">
        Welcome, {userName}
      </p>
      <button
        onClick={logOut}
        className="px-3 py-1 text-xs md:px-6 md:py-2 md:text-base bg-red-500 text-white rounded-lg hover:bg-red-400 transition">
        Log Out
      </button>
    </div>
  );
}

export default User;
