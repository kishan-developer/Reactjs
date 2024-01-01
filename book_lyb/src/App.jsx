


import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import BookList from './Components/BookList/BookList';
import './App.css';

const App = () => {

  const [books , setBooks] = useState([]);
  const url = "http://localhost:3000/books";

  async function fetchData(){
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data);
    setBooks(data);
  }
  fetchData();
  useEffect(()=> {
    
  }, [])
  


  return (
    <div className='app'>
        <Navbar/>
        <div className='app_body'>
          {/* List of data  */}
          <BookList books={books}/>
        </div>
    </div>
  );
}

export default App;
