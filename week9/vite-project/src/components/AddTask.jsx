import React, { useState } from 'react';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, date };
    console.log('New Task:', newTask);
    setTitle('');
    setDate('');

  }

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
