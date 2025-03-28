import React from 'react'

export default function Header(props) {
  console.log(props);
  return (
    <div>
        <header className='headerContainer'>
            <h1>Welcome to {props.myAppName}</h1>
            <h1>Version: {props.version}</h1>
            <button>Add A Task</button>
        </header>
    </div>
  )
}
