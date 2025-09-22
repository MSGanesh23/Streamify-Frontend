import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminAddVideo from '../components/AdminAddVideo';
import Footer from '../components/Footer';
import './../assets/css/AdminDashboard.css';
import AddAdmin from '../components/AddAdmin';
import UserManager from '../components/UserManager';

export default function AdminDashboard() {
  const { section } = useParams(); // Get section from URL path (e.g., 'addVideo', 'addAdmin')
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Authenticate admin from session
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  const handleSectionChange = (newSection) => {
    navigate(`/admin/${newSection}`);
  };

  return (
    <div className="admin-dashboard">
      {/* Admin Navigation */}
      <AdminNavbar email={email} onSectionChange={handleSectionChange} />

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <h2>Welcome, Admin</h2>

        {section === 'addVideo' && (
          <section className="add-video-section">
            <h3>Add New Video</h3>
            <AdminAddVideo />
          </section>
        )}

        {section === 'addAdmin' && (
          <section>
            <h3>Add Admin</h3>
            <AddAdmin />
          </section>
        )}

        {section === 'usersList' && (
          <section>
            <h3>Users List</h3>
            <UserManager />
          </section>
        )}

        {/* Fallback for undefined or invalid section */}
        {!['addVideo', 'addAdmin', 'usersList'].includes(section) && (
          <section>
            <p>Please select a section from the Admin Options menu.</p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}