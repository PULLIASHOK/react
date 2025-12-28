import React from 'react'
import { useState,useEffect } from 'react'


function Home() {

    const [searchTerm,setSearchTerm]=useState("")
    const [productData,setProductData]= useState([])

    useEffect(()=>{
        (async function (){
            const resp=await fetch(`https://fakestoreapi.com/products`)
            const data=await resp.json()
            setProductData(data)
            console.log(data)

        })
        ()
    },[])
  return (
    <>
    <header className="nav_wrapper">
        <input className="search_input" type="text"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
    </header>
    <main>
       {productData == null ? <h3>Loading....</h3>:productData.map((product)=>{
        return (
          <div className="main-container">
          <div className="div-container">
            <img src={product.image} className='img-style' alt="product_img"/>
            <div>
            <p className="title">{product.title}</p>
            <p className="price">{product.price}</p>
            </div>
          </div>
          </div>
        )
       })}
    </main>
    </>
  )
}

export default Home