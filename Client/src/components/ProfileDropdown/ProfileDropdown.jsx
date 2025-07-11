import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "../../css/ProfileDropdown.module.css";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated, user } = useContext(Context);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/User/logout", {
        withCredentials: true,
      });

      if (response.data.success) {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        toast.success("Logged out successfully");
        navigate("/home");
      } else {
        toast.error("Logout failed: No success response");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
    setIsOpen(false);
  };

  const handleYourEvents = () => {
    navigate("/my-events");
    setIsOpen(false);
  };

  const handleAccountSettings = () => {
    // Navigate to account settings page (you can create this route)
    navigate("/account-settings");
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!isAuthenticated) {
    return null;
  }

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    return names.length > 1 
      ? names[0][0] + names[1][0] 
      : names[0][0];
  };

  const userName = user?.firstName || user?.name || "User";
  const userEmail = user?.email || "user@example.com";

  return (
    <div className={styles.profileDropdown} ref={dropdownRef}>
      <button 
        className={styles.profileButton}
        onClick={toggleDropdown}
        aria-label="User profile menu"
      >
        <div className={styles.avatar}>
          {getInitials(userName)}
        </div>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.userInfo}>
            <div className={styles.avatarLarge}>
              {getInitials(userName)}
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>{userName}</p>
              <p className={styles.userEmail}>{userEmail}</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.menuItems}>
            <button 
              className={styles.menuItem}
              onClick={handleYourEvents}
            >
              <span className={styles.menuIcon}>📅</span>
              <div className={styles.menuText}>
                <span className={styles.menuTitle}>Your Events</span>
                <span className={styles.menuSubtitle}>View your event details</span>
              </div>
            </button>

            <button 
              className={styles.menuItem}
              onClick={handleAccountSettings}
            >
              <span className={styles.menuIcon}>⚙️</span>
              <div className={styles.menuText}>
                <span className={styles.menuTitle}>Account Settings</span>
                <span className={styles.menuSubtitle}>Manage your profile</span>
              </div>
            </button>

            <button 
              className={styles.menuItem}
              onClick={handleLogout}
            >
              <span className={styles.menuIcon}>🚪</span>
              <div className={styles.menuText}>
                <span className={styles.menuTitle}>Logout</span>
                <span className={styles.menuSubtitle}>Sign out of your account</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
