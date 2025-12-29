import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";   // Left sidebar
import TopNav from "./components/TopNav";   // Top right nav

import Homepage from "./pages/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AddAdmin from "./components/AddAdmin";
import UserManager from "./components/UserManager";
import WatchPage from "./pages/WatchPage";
import AdminAddVideo from "./components/AdminAddVideo";
import PaymentPage from "./payment";
import MyListPage from "./pages/MyListPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Router basename="/">
      

          {/* PAGE CONTENT */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/userDashboard" element={<LandingPage />} />
            <Route path="/watch/:fileId" element={<WatchPage />} />
            <Route path="/AddVideo" element={<AdminAddVideo />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
            <Route path="/UsersList" element={<UserManager />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        
    </Router>
  );
};

export default App;
