import React from 'react';
import { DiChrome } from 'react-icons/di';

export default function Task({ taskObj, onDelete }) {
  return (
    <li>
      <div className="taskContainer">
        <div className="taskContent">
          <p>{taskObj.title}</p>
          <p>{taskObj.date}</p>
        </div>
        <DiChrome 
          className="deleteIcon" 
          onClick={() => onDelete(taskObj.id)} 
          title="Delete Task"
        />
      </div>
    </li>
  );
}
