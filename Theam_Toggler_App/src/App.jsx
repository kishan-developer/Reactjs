import React from 'react';
import './App.css';
import { useThemeContextValue } from './Contexts/ThemeProvider';

// context Api basic
const App = () => {
  // function calling here
  const { toggle , toggleFunction } = useThemeContextValue()
  console.log(toggle)
  return ( 
    <div className='app' style={{backgroundColor : toggle ?
     'black' : 'white' }}>
      <div className='section'>
        <h1>Context API Examples</h1>
        <button  onClick={toggleFunction}>Change the theme</button>
      </div>
    </div>
  );
}

export default App;
