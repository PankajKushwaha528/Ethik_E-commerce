import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/cart';

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    const success = register(form.name, form.email, form.password);
    if (success) {
      toast.success("Registered successfully! Please login.");
      navigate('/login', { state: { from }, replace: true });
    }else{
        return ; // If registration fails, do not navigate
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-20 mb-16 border rounded-md shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          className="p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
