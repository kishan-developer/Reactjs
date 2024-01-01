

import React from 'react'
import {useState} from 'react';


// jsx
function App() {

  // structure of data
  // pointer = x , y coordinates

  const [x ,setX] = useState(0);
  const [y, setY] = useState(0);


  return (
    // React.createElement('div', {} , 'hello world')
    <div onPointerMove={e => {
      setX(e.clientX)
      setY(e.clientY)

    }}
    style={{
      position:'relative',
      width:'100vh'
    }} 
    >

      <div style={{
        position:'absolute',
        backgroundColor:'red',
        transform: `transslate(${x}px, ${y}px)`,
        left:-12,
        top:-12,
        width:100,
        height:80

      }}>

        <h2>Move</h2>

      </div>
    </div>
  )
}8

export default App
