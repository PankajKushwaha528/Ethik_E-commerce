import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("All fields required");

    login(email, password);
    toast.success("Logged in successfully!");
    navigate(from, { replace: true });
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-20 mb-16 border rounded-ms shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
