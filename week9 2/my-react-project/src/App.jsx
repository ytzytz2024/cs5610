import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/addTask.jsx";
import TaskDetails from "./components/TaskDetails.jsx";
import Profile from "./components/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { Routes, Route, Link, NavLink } from "react-router";
import { BrowserRouter } from "react-router";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { IoTrashBin } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State for screen width
  const { isAuthenticated, isLoading } = useAuth0();
  let controller = new AbortController();
  let signal = controller.signal;

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5001/tasks");
      if (response.ok) {
        const data = await response.json();
        setTasksFromServer(data);
        console.log("fetchData", data);
      } else {
        throw new Error("Error: ", response.status);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    fetchData();
    return () => {
      console.log("Cleanup");
      controller.abort();
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const appName = "My App AAA";

  return isLoading ? (
    <img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" />
  ) : (
    <div className="appContainer">
      <nav>
        <div onClick={() => setMenuOpen(!menuOpen)} className="menu-icon">
          {menuOpen ? <FaTimes />: <FaBars />}
        </div>
        {(menuOpen || screenWidth > 576) && (
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        )}
      </nav>

      <div className="auth-buttons">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header myAppName={appName} version={2} />
              <AddTask />
            </>
          }
        />
        <Route path="/tasks" element={<TasksList tasks={tasksFromServer} />}>
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
