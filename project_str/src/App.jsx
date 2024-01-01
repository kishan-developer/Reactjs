
// useReducer() 
// the useReducer() hook is used to store and update states just like a useState() hook.
// it can handle  any number off data


import React, { useReducer } from 'react';
import './App.css'

function reducer(state,  action){
  // for updating state
  // console.log(state)
  console.log('action' , action)
  // check the action goto console and type change filter to action and inside the input box type anything action will execute

  switch(action.type){
    case 'CHANGED_NAME' : 
    // return the object
      return {
          name : action.payload ,
          age : state.age
      }

      case 'INCREMENT_AGE' : 
      return {
        name : state.name,
        age : state.age +  1
      }
      default :
        return state
  }
  // using throw error or inside the case set default case is state 
  //  throw an Error
  // throw Error('Unknown action : ' + action.type)
}


// here setting a initialState data as a object
const initialState = {name : 'Kishan Kumar Ray' , age:25}

// App is also  getting render for every action 

const App = () => {

  const [state, dispatch] = useReducer(reducer , initialState);

  console.log(state);

  function handleInputChange(e){

    // dispatch an action  // dispatch ka kam hai action ko bhejna
    // dispatch only sends the data
    // dispatch it is similar to useState but it defferent is implementation dispatch only send the data

    // note  =>dispatch only sends the data once the  reducer update the state only than it triggers the re-render.
    dispatch({
      //   type and payload if you give any name like a and b
      // it is  just a type key
      type: 'CHANGED_NAME',
      // payload means what ever data u sending
      payload: e.target.value
    })
  }

  function hadleButtonClicked(){
      // setting a dispatch function with type key 
      dispatch({type : 'INCREMENT_AGE'})
  }

  console.log('App rendered');

  return (
    <div className='box'>
      <input value={state.name} onChange={handleInputChange} placeholder='Enter Your Name' />
      <button onClick={hadleButtonClicked}>Increment Age</button>
      <h3>Hello , {state.name} , you are {state.age} year old</h3>
    </div>
  );
}

export default App;
