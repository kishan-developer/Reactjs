import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {


  var myHeaders = new Headers();
  myHeaders.append("projectId", "rcetbaqftf5m");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  async function fetchData() {

    fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=10000", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="product_page" className='w-full pl-10'>

        <div className='w-full flex  pl-7'>
          <div id="sidebar" className='w-[20%] pt-17 '>
            <h2 className='text-2xl font-bold pb-10 '>Product type </h2>
            <h2 className='text-2xl'>sidebar</h2>
            <ul className='border  border-1 border-black h-[400px] pt-5'>
              <li>color</li>
              <li>size</li>
              <li>type</li>
              <li>company</li>
              <li>weight</li>
              <li>gender</li>
            </ul>
          </div>

          <div id="product_cards" className='w-[80%] '>
            <div id="top_product_section" className='w-full px-10 h-20 flex items-center justify-between'>
              <h1 className='text-xl'>product_cards</h1>
              <select>
                <option value="">Hight To Low</option>
                <option value="">Low To Hight</option>
                <option value="">Latest</option>
              </select>
            </div>

            <div id="cards" className='w-full grid grid-cols-3 gap-5 p-10 '>
              <div id="card" className='h-96 border border-1 border-black'>
                <div className="img h-84"></div>
                <h2>product name</h2>
                <h2>price</h2>
                <h2>title</h2>
                <h2>descreption</h2>
                <h2>offer</h2>
              </div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>

              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>

              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>

              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>
              <div id="card" className='h-96 border border-1 border-black'>card</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
