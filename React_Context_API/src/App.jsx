import React from 'react';
import { createContext } from 'react';
import User from './Components/User';


// React.createContext()
// expost Usercoontext u r able to use any where
export const UserContext = createContext();  

console.log(UserContext);

const App = () => {

  // first we have a data
  // const data = 'james Bond'

  return (
    <div>
      {/* i know pass the data using prop but i know my app is bit than this proces is creare a problem  */}
      {/* <User name= {data} /> is not a god way tha i use context  api */}

      {/* we need the data without props */}
      

      <UserContext.Provider value='Iron Man'>
        <User/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
