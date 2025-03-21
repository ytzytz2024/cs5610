import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5001/tasks");
        if (response.ok) {
          const data = await response.json(); // Parse JSON data
          setTasks(data); // Set the tasks state variable
        } else {
          console.log("Failed to fetch data");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const addTaskToServer = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (response.ok) {
        console.log("Task added successfully");
        // Fetch updated tasks from the server
        const updatedResponse = await fetch("http://localhost:5001/tasks");
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setTasks(updatedData);
        }
      } else {
        console.log("Failed to add task");
      }
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  const deleteTaskFromServer = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Task with id ${taskId} deleted successfully`);
        // Fetch updated tasks from the server
        const updatedResponse = await fetch("http://localhost:5001/tasks");
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setTasks(updatedData);
        }
      } else {
        console.log("Failed to delete task");
      }
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  const appName = "My Awesome App111";

  return (
    <div className="appContainer">
      <Header myAppName={appName} version={2} />
      <AddTask onAddTask={addTaskToServer} />
      <TasksList tasks={tasks} setTasks={setTasks} onDeleteTask={deleteTaskFromServer} />
    </div>
  );
}
