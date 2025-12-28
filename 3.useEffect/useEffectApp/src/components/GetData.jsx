import React from 'react'
import { useState ,useEffect} from 'react'

function GetData() {
  const [data,setData]=useState(null);


  useEffect(
    function fn(){
      async function fetchData(){
        console.log("useEffectRan")
      const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
      const user=await response.json();
      setData(user);
      
    }
    fetchData()
    },[]
  )

  console.log("render")

  return (
    <>
      {data == null ? <h2>Placholder data is loading ......</h2>:
      <>
      <h2>Name : {data.name}</h2>
      <h2>Username : {data.username}</h2>
      <h2>Email : {data.email}</h2>
      </>
      }

    </>
  )
}

export default GetData