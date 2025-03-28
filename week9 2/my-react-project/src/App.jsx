import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/addTask.jsx";
import TaskDetails from "./components/TaskDetails.jsx";
import { Routes, Route, Link, NavLink } from "react-router";
import { BrowserRouter } from "react-router";

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
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

  const appName = "My App AAA";

  // function Counter() {
  //   const [form, setCount] = useState({name: '张三', age: 18});
  //   const unchangedCount = 0;

  //   function handleClick() {
  //     setCount({...form, // 保留其他状态变量
  //       name: '李四'
  //     }); // 更改状态变量会触发重新渲染
  //     unchangedCount + 1;
  //   }

  //   return <button onClick={handleClick}>点击次数: {unchangedCount}{form.name} {form.age}</button>; // UI会更新
  // }

  // function ControlledInput() {
  //   const [value1, setValue] = useState('5');

  //   return (
  //     <div>
  //       <input
  //         value={value1}
  //         onChange={(e) => setValue(e.target.value)}
  //         type="text"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="appContainer">
      <nav>
        <NavLink
          // className={(props) +> {
          //   console.log(props);
          //   return props.className + ' active';
          // }}
          to="/"
        >
          Home
        </NavLink>
        {/* <a href="/">Home</a> */}
        <Link to="/tasks">Tasks</Link>
      </nav>
      {/* <Header myAppName={appName} version={2} /> */}
      {/* <AddTask /> */}
      {/* <TasksList tasks={tasksFromServer} /> */}
      {/* <Counter /> */}
      {/* <ControlledInput /> */}
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

        {/* <Route path="/tasks/:taskId" element={<h1>Task Details</h1>} /> */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
