import React, { useState, useEffect, useContext } from "react";
import { Context } from "../main.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar.jsx";
import "../css/MyEvents.css";

const MyEvents = () => {
  const { user, isAuthenticated } = useContext(Context);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingEvent, setDeletingEvent] = useState(null);
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Fetch user's events
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/events/user/events",
          { withCredentials: true }
        );
        setEvents(response.data.events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
        toast.error("Failed to load your events");
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchUserEvents();
    }
  }, [isAuthenticated]);

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleDeleteClick = (event) => {
    setDeletingEvent(event);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingEvent) return;
    
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/events/user/delete/${deletingEvent._id}`,
        { withCredentials: true }
      );
      setEvents(events.filter(event => event._id !== deletingEvent._id));
      toast.success("Event deleted successfully");
    } catch (error) {
      toast.error("Failed to delete event");
    } finally {
      setDeletingEvent(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeletingEvent(null);
  };

  const handleUpdate = async (updatedEvent) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/events/user/update/${updatedEvent._id}`,
        updatedEvent,
        { withCredentials: true }
      );
      setEvents(events.map(event => 
        event._id === updatedEvent._id ? response.data.event : event
      ));
      setEditingEvent(null);
      toast.success("Event updated successfully");
    } catch (error) {
      toast.error("Failed to update event");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return '#fbbf24';
      case 'accepted': return '#10b981';
      case 'rejected': return '#ef4444';
      default: return '#6b7280';
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="my-events-container">
        <div className="my-events-header">
          <h1>Your Events</h1>
          <p>Manage your booked events - view, edit, or cancel them</p>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading your events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="no-events">
            <div className="no-events-icon">📅</div>
            <h2>No Events Found</h2>
            <p>You haven't booked any events yet.</p>
            <button 
              className="book-event-btn"
              onClick={() => navigate("/events")}
            >
              Book Your First Event
            </button>
          </div>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <div key={event._id} className="event-card">
                <div className="event-header">
                  <h3>{event.event || "Event"}</h3>
                  <span 
                    className="event-status"
                    style={{ backgroundColor: getStatusColor(event.status) }}
                  >
                    {event.status || "Pending"}
                  </span>
                </div>
                
                <div className="event-details">
                  <div className="event-info">
                    <span className="info-label">Date:</span>
                    <span className="info-value">{formatDate(event.eventdate)}</span>
                  </div>
                  
                  <div className="event-info">
                    <span className="info-label">Package:</span>
                    <span className="info-value">{event.packages}</span>
                  </div>
                  
                  <div className="event-info">
                    <span className="info-label">Guests:</span>
                    <span className="info-value">{event.guests}</span>
                  </div>
                  
                  <div className="event-info">
                    <span className="info-label">Budget:</span>
                    <span className="info-value">₹{event.budget}</span>
                  </div>
                  
                  <div className="event-info">
                    <span className="info-label">Location:</span>
                    <span className="info-value">{event.location}</span>
                  </div>
                </div>
                
                <div className="event-actions">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(event)}
                  >
                    <span className="btn-icon">✏️</span>
                    Edit
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteClick(event)}
                  >
                    <span className="btn-icon">🗑️</span>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {editingEvent && (
          <EditEventModal 
            event={editingEvent}
            onSave={handleUpdate}
            onCancel={() => setEditingEvent(null)}
          />
        )}

        {/* Delete Confirmation Modal */}
        {deletingEvent && (
          <DeleteConfirmationModal 
            event={deletingEvent}
            onConfirm={handleDeleteConfirm}
            onCancel={handleDeleteCancel}
          />
        )}
      </div>
    </>
  );
};

// Delete Confirmation Modal Component
const DeleteConfirmationModal = ({ event, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content delete-modal">
        <div className="modal-header">
          <h2>Delete Event</h2>
        </div>
        
        <div className="delete-modal-body">
          <div className="delete-icon">🗑️</div>
          <h3>Are you sure you want to delete this event?</h3>
          <p>
            <strong>{event.event}</strong> on {new Date(event.eventdate).toLocaleDateString()}
          </p>
          <p className="delete-warning">This action cannot be undone.</p>
        </div>
        
        <div className="modal-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="delete-confirm-btn" onClick={onConfirm}>
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

// Edit Event Modal Component
const EditEventModal = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    event: event.event || "",
    eventdate: event.eventdate ? event.eventdate.split('T')[0] : "",
    packages: event.packages || "",
    guests: event.guests || "",
    budget: event.budget || "",
    location: event.location || ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...event,
      ...formData
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Event</h2>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label>Event Type:</label>
            <select 
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Select Event Type</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Corporate">Corporate</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Engagement">Engagement</option>
              <option value="Housewarming">Housewarming</option>
              <option value="Exhibition">Exhibition</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Event Date:</label>
            <input
              type="date"
              name="eventdate"
              value={formData.eventdate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Package:</label>
            <select
              name="packages"
              value={formData.packages}
              onChange={handleChange}
              required
            >
              <option value="">Select Package</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Number of Guests:</label>
            <input
              type="text"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Budget:</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              min="10000"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Location:</label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleChange}
              rows="3"
              required
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

export default MyEvents;
