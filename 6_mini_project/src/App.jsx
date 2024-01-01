import React, { useEffect, useState } from 'react';



  const url = 'https://jsonplaceholder.typicode.com/users';


  function App() {

    const [users, setUsers] = useState([])

    // this function getdata 
    const fetchUsers = async() => {
      const response = await fetch(url)
      // conveted to json
      const data = await response.json();
  
      console.log(data)
      setUsers(data)
    }

    useEffect(() => {
      // this will run once when  the component mounts
      fetchUsers()
    }, [])
  

    return (
      <div>
        <h1>Users</h1>

        {users.map(user => (

          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>

        ))}
      </div>
    );
  }

  export default App;


// how to fetch data from api
