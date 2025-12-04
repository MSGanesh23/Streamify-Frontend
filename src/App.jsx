import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup"; // Import Signup component
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import AdminDashboard from "./pages/AdminDashboard"; // Fixed typo
import AddAdmin from "./components/AddAdmin";
import UserManager from "./components/UserManager";
import WatchPage from './pages/WatchPage'; // ✅ Correct relative path
import AdminAddVideo from './components/AdminAddVideo';
import PaymentPage from "./payment";
import MyListPage from "./pages/MyListPage";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./components/SearchResults"; // ✅ correct import


const App = () => {
  return (
    <Router basename="/">
      <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/adminDashboard" element={<AdminDashboard />} />
  <Route path="/userDashboard" element={<LandingPage />} />
  <Route path="/watch/:fileId" element={<WatchPage />} />
  <Route path="/AddVideo" element={<AdminAddVideo />} />
  <Route path="/AddAdmin" element={<AddAdmin/>}/>
  <Route path="/UsersList" element={<UserManager />} />
  <Route path="/payment" element={<PaymentPage/>}/>
  <Route path="/details/:id" element={<DetailsPage />} />
  <Route path="/my-list" element={<MyListPage />} />
  <Route path="/search" element={<SearchPage />} />  {/* Only this */}
</Routes>

    </Router>
  );
};

export default App;
