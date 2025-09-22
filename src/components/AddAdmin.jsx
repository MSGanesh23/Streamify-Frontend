import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from '../components/AdminNavbar';
import axios from "axios";
import "../assets/css/AddAdmin.css"; // Optional: Reuse dashboard styles

const AddAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setLoggedInEmail(storedEmail);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4570/api/AddAdmin", {
        email,
        password,
      });
      alert(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data || "Something went wrong");
    }
  };

  return (
    <>
      <AdminNavbar email={loggedInEmail} />
      <div className="form-container">
        <h2>Add Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Add Admin</button>
        </form>
      </div>
    </>
  );
};

export default AddAdmin;
