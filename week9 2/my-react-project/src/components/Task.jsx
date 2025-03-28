import React from 'react';
import { IoTrashBin } from "react-icons/io5";
import { Routes, Route, Link, NavLink } from "react-router";

export default function Task({ taskObj, onDelete }) {
   function deletePressed() {
     onDelete(taskObj.id);
   }

   return (
     <li key={taskObj.id}>
       <div className='taskContainer'>
         <div className='taskTitleIconContainer'>
           <NavLink to={`/tasks/${taskObj.id}`}>{taskObj.title}</NavLink>
           <IoTrashBin className='deleteIcon' onClick={deletePressed} />
         </div>
         <p>{taskObj.date}</p>
       </div>
     </li>
   );
}
