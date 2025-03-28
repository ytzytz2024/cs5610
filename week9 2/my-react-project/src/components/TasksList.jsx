// import React, {useState} from 'react';
import Task from './Task.jsx';
import { Outlet } from 'react-router';

export default function TasksList({tasks}) {
    // const [tasks, setTasks] = useState(
    //     [
    //         {
    //             id: 1,
    //             title: "Review week 9 material",
    //             date: "June 4th at 1 pm",
    //         },
    //         {
    //             id: 2,
    //             title: "Do quiz 9",
    //             date: "June 4th at 6 pm",
    //         },
    //         {
    //             id: 3,
    //             title: "Work on assignment 2",
    //             date: "June 5th at 8 am",
    //         }
    //     ]);

    async function deleteTask(deleteId) {
        console.log("Delete from taskList: ", deleteId);
        // const newArray = tasks.filter((task) => {
        //     return task.id !== deleteId;
        // })
        // setTasks(newArray);
        try {
            await fetch (`http://localhost:5001/tasks/${deleteId}`, {
                method: 'DELETE',
            });
        }
        catch (error) {
            console.log("Error: ", error);
        }
    }

    return (tasks.length === 0) ? <p>No tasks to display</p> : (
        <>
        <ul> 
            {tasks.map((item) => {
                return <Task key = {item.id} taskObj={item} onDelete={deleteTask}/>;
            })}
        </ul>
        <Outlet/>
        </>

    );
 }
