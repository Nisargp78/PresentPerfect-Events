import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/events/getall",
          { withCredentials: true }
        );
        setEvents(data.events);
      } catch (error) {
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  const handleUpdateStatus = async (eventId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/events/update/${eventId}`,
        { status },
        { withCredentials: true }
      );
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId
            ? { ...event, status }
            : event
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }


  return (
    <div className="body">
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/admin.png" alt="UserImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </h5>
              </div>
              <p>
              Welcome to your event management dashboard! Here, you can track, organize, and manage all your events seamlessly. Stay updated on event statuses, registrations, and requests—all in one place
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Events</p>
            <h3>3</h3>
          </div>
          <div className="thirdBox">
            <p>Pending Requests</p>
            <h3>1</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Event Details</h5>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Event</th>
                <th>Date</th>
                <th>Package</th>
                <th>Budget</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {events && events.length > 0
                ? events.map((event) => (
                    <tr key={event._id}>
                      <td>{event.email}</td>
                      <td>{event.event}</td>
                      <td>{new Date(event.eventdate).toLocaleDateString()}</td>
                      <td>{event.packages}</td>
                      <td>{event.budget}</td>
                      <td>{event.location}</td>
                      <td>
                        <select
                          className={
                            event.status === "Pending"
                              ? "value-pending"
                              : event.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                          }
                          value={event.status}
                          onChange={(e) =>
                            handleUpdateStatus(event._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Accepted" className="value-accepted">
                            Accepted
                          </option>
                          <option value="Rejected" className="value-rejected">
                            Rejected
                          </option>
                        </select>
                      </td>
                      {/* <td>
                        {event.hasCompleted ? (
                          <GoCheckCircleFill className="green" />
                        ) : (
                          <AiFillCloseCircle className="red" />
                        )}
                      </td> */}
                    </tr>
                  ))
                : "No Events Found!"}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
