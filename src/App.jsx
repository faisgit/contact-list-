import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
export default function App() {
const url  = 'https://randomuser.me/api/?results=100'
const [data,setData] = useState([])

useEffect(() => {
  fetch(url)
  .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json()
  })
  .then(data => {
    setData(data.results)
  })
  .catch(error => {
    console.log(error)
  })
},[])

  return (
    <>
    <Navbar />
    <div className="flex  flex-wrap flex-col justify-center items-center gap-4 py-10">
      {
        data.map(item => (
          <div className="card card-aside card-compact bg-base-100 shadow-xl w-80 md:w-96 rounded-3xl px-3 py-3 flex  items-center" key={item.login.uuid}>
          <figure className="mx-4"><img src={item.picture.thumbnail} alt="Movie" className="rounded-full"/></figure>
          <div className="card-body text-sm md:text-base">
            <h2 className="card-title">{item.name.title} {item.name.first} {item.name.last} </h2>
            <p>Email: {item.email}</p>
            <p>Mobile no : {item.cell}</p>
          </div>
        </div>
         )
        )
      }
    </div>
    </>
  );
}