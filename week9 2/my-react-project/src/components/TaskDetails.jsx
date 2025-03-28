import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router';

export default function TaskDetails() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

//   useEffect(() => {
//     async function fetchTask() {
//       try {
//         const response = await fetch(`http://localhost:5001/tasks/${taskId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setTask(data);
//         } else {
//           throw new Error('Task not found');
//         }
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     }
//     fetchTask();
//   }, [taskId]);

//   if (!task) {
//     return <p>Loading task details...</p>;
//   }

  return (
    <div className="taskDetails">
      <h2>
        <NavLink to={`/tasks/${taskId}`} className="active">
          {taskId}
        </NavLink>
      </h2>
      {/* <p>{task.date}</p>
      <p>{task.description || 'No description available'}</p> */}
    </div>
  );
}