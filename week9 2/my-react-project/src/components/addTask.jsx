import React from 'react';
import { useNavigate } from 'react-router';

export default function AddTask() {
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      date: date,
    };
    console.log(newTask);
    setDate('');
    setTitle('');

    try {
      const response = await fetch('http://localhost:5001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const createdTask = await response.json();
        navigate(`/tasks/${createdTask.id}`); // Navigate to the task details page
      }
    } catch (error) {
      console.log('Submit Handler Error: ', error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit"> Save </button>
    </form>
  );
}
