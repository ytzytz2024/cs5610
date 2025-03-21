import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, setTasks, onDeleteTask }) {
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    onDeleteTask(taskId); // Call the server delete function
  };

  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} taskObj={task} onDelete={deleteTask} />
          ))}
        </ul>
      ) : (
        <p>No tasks left!</p>
      )}
    </div>
  );
}

