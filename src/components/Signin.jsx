import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../assets/css/Signin.css';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (enteredCaptcha !== captcha) {
      alert("CAPTCHA mismatch. Please try again.");
      generateCaptcha(); // refresh captcha
      return;
    }

    try {
      const res = await fetch("http://localhost:4570/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();

      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('role', data.role);

      if (data.role === 1) navigate("/AdminDashboard");
      else navigate("/UserDashboard");

    } catch (error) {
      alert("Invalid credentials or error logging in.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Streamify</h1>
      <div className="form-box">
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button type="button" className="refresh-button" onClick={generateCaptcha}>↻</button>
          </div>
          <input type="text" placeholder="Enter CAPTCHA" required value={enteredCaptcha} onChange={(e) => setEnteredCaptcha(e.target.value)} />

          <button type="submit">Sign In</button>
        </form>

        <div className="links">
          <a href="#">Forgot password?</a><br />
          <span className="link" onClick={() => navigate("/Signup")}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;