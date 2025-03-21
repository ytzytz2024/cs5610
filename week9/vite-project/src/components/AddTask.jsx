import React, { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, date };
    await onAddTask(newTask);
    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Enter task title" 
          value={title} 
          onChange={handleTitleChange} 
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input 
          type="text" 
          placeholder="Enter task date" 
          value={date} 
          onChange={handleDateChange} 
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
