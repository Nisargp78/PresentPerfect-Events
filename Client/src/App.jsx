import { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Router/Routers.jsx";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { Context } from "./main";
import axios from "axios";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/User/me",
          { withCredentials: true }
        );

        setIsAuthenticated(true);
        setUser(response.data.user);
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
      }
    };

    if (!isAuthenticated) {
      fetchUser();
    }
  }, []);

  return (
    <Router>
      <Routers />
      <Toaster />
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
