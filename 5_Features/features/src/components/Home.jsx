import React from 'react'
import { useState,useEffect } from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {FaArrowAltCircleDown} from 'react-icons/fa'

function Home() {

    const [searchTerm,setSearchTerm]=useState("")
    const [productData,setProductData]= useState([])
    const [sortDir,setSortDir]=useState(0)
    const [categories,setCategories]=useState([])
    const [currentCategory,setCurrentCategory]=useState("All Categories")


    function inComparater(product1,product2){
      if (product1.price > product2.price){
        return 1
      }
      else{
        return -1
      }
    }

    function decComparater(product1,product2){
      if (product1.price < product2.price){
        return 1
      }
      else{
        return -1
      }
    }

    useEffect(()=>{
        (async function (){
            const resp=await fetch(`https://fakestoreapi.com/products`)
            const data=await resp.json()
            setProductData(data)
        })
        ()
    },[])

    

    let filteredArr=productData;
    if (filteredArr != null){
      filteredArr=filteredArr.filter((elem)=>{
      let lowerSearchTerm=searchTerm.toLowerCase();
      
      let lowerTitle=elem.title.toLowerCase()
      return lowerTitle.includes(lowerSearchTerm)
    })

    }

    let filteredSortedArr=filteredArr;

    if (sortDir != 0){
      if (sortDir == 1) {
        filteredSortedArr.sort(inComparater)
      }
      else{
        filteredSortedArr.sort(decComparater)
      }
    }

    
    useEffect(()=>{
      (async function(){
        const resp=await fetch(`https://fakestoreapi.com/products/categories`);
        const categoriesData=await resp.json();
        setCategories(categoriesData)
      })
      ()
    },[])


    let filteredCategoryData=filteredArr

    if (currentCategory !== "All Categories"){
      filteredCategoryData=filteredCategoryData.filter((product)=>{
        return product.category == currentCategory
      })
    }
    
    
  return (
    <>
    <header className="nav_wrapper">
        <input className="search_input" type="text"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <div className="icon-container">
          <FaArrowAltCircleUp style={{color:"white"}} onClick={()=>{setSortDir(1)}}/>
          <FaArrowAltCircleDown style={{color:"white"}} onClick={()=>{setSortDir(-1)}}/>
        </div>
        
    </header>
    <div className="categories_wrapper">
      <button className="category-button">All Categories</button>
      {categories.map((category)=>{
        return (<button className="category-button" 
          onClick={()=>
            {setCurrentCategory(category)
              

          }}>
            {category}</button>)
        
      })}
          
    </div>



    <main className="main-container">
       {filteredCategoryData == null ? <h3>Loading....</h3>:filteredCategoryData.map((product)=>{
        return (
          
          <div className="div-container">
            <img src={product.image} className='img-style' alt="product_img"/>
            <div className="card-container">
              <p className="title">{product.title}</p>
              <br></br>
              <p className="price">{product.price}</p>
            </div>
          </div>
         
        )
       })}
    </main>
    </>
  )
}

export default Home