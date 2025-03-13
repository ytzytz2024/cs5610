import React from 'react'

export default function Header({myAppName}) {
  console.log(myAppName);
  return (
    <div>
      <header className="headerContainer">
        <h1>Welcome to {myAppName}</h1>
        <button>Add A Task</button>
      </header>
    </div>
  ) 
}