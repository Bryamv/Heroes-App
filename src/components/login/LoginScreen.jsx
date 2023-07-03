import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "Bryam", logged: true },
    };
    dispatch(action);
    localStorage.getItem("lastPath")
      ? navigate(localStorage.getItem("lastPath"))
      : navigate("/");
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
