import React, { useContext, useState } from "react";
import { Context } from "../main.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar.jsx";
import "../css/AccountSettings.css";

const AccountSettings = () => {
  const { user, isAuthenticated, setUser } = useContext(Context);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.contact || ""
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:4000/api/v1/user/profile/update",
        profileData,
        { withCredentials: true }
      );
      setUser(response.data.user);
      setShowEditProfile(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    try {
      await axios.put(
        "http://localhost:4000/api/v1/user/password/update",
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        },
        { withCredentials: true }
      );
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      setShowChangePassword(false);
      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update password");
    }
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="account-settings-container">
        <div className="account-settings-header">
          <h1>Account Settings</h1>
          <p>Manage your profile and preferences</p>
        </div>

        <div className="account-settings-content">
          <div className="settings-sidebar">
            <div className="settings-nav">
              <button className={`settings-nav-item ${activeTab === "profile" ? "active" : ""}`} onClick={() => handleTabClick("profile")}>
                <span className="nav-icon">👤</span>Profile Information
              </button>
              <button className={`settings-nav-item ${activeTab === "security" ? "active" : ""}`} onClick={() => handleTabClick("security")}>
                <span className="nav-icon">🔒</span>Security
              </button>
            </div>
          </div>

          <div className="settings-main">
            {activeTab === "profile" && (
              <div className="settings-section">
                <h2>Profile Information</h2>
                <div className="profile-info">
                  <div className="profile-avatar">
                    <div className="avatar-circle">
                      {user?.firstName?.charAt(0) || user?.name?.charAt(0) || "U"}
                    </div>
                  </div>
                  <div className="profile-details">
                    <div className="form-group">
                      <label>Name:</label>
                      <p>{user?.firstName || user?.name || "Not provided"}</p>
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <p>{user?.email || "Not provided"}</p>
                    </div>
                    <div className="form-group">
                      <label>Phone:</label>
                      <p>{user?.contact || "Not provided"}</p>
                    </div>
                    <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="settings-section">
                <h2>Security Settings</h2>
                <div className="security-options">
                  <div className="security-item">
                    <h3>Change Password</h3>
                    <p>Update your password to keep your account secure</p>
                    <button className="security-btn" onClick={handleChangePassword}>Change Password</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Edit Profile Modal */}
        {showEditProfile && (
          <EditProfileModal 
            profileData={profileData}
            onSubmit={handleProfileSubmit}
            onChange={handleProfileChange}
            onCancel={() => setShowEditProfile(false)}
          />
        )}

        {/* Change Password Modal */}
        {showChangePassword && (
          <ChangePasswordModal 
            passwordData={passwordData}
            onSubmit={handlePasswordSubmit}
            onChange={handlePasswordChange}
            onCancel={() => setShowChangePassword(false)}
          />
        )}
      </div>
    </>
  );
};

// Edit Profile Modal Component
const EditProfileModal = ({ profileData, onSubmit, onChange, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>
        
        <form onSubmit={onSubmit} className="edit-form">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={onChange}
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={onChange}
            />
          </div>
          
          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Change Password Modal Component
const ChangePasswordModal = ({ passwordData, onSubmit, onChange, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Change Password</h2>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>
        
        <form onSubmit={onSubmit} className="edit-form">
          <div className="form-group">
            <label>Current Password:</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          
          <div className="form-group">
            <label>Confirm New Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          
          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
