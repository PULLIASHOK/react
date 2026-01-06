import React from 'react'
import { useState,useEffect } from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {FaArrowAltCircleDown} from 'react-icons/fa'
import ProductList from './ProductList'
import Categories from './Categories'
import basicOps from './Utilities/basicOps'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePaginationContext } from './contexts/PaginationContexts'

function Home() {

    const [searchTerm,setSearchTerm]=useState("")
    const [productData,setProductData]= useState([])
    const [sortDir,setSortDir]=useState(0)
    const [categories,setCategories]=useState([])
    const [currentCategory,setCurrentCategory]=useState("All Categories")

    const {pageNum,pageSize,
      setPageNum,setPageSize
    } = usePaginationContext()


    

    useEffect(()=>{
        (async function (){
            const resp=await fetch(`https://fakestoreapi.com/products`)
            const data=await resp.json()
            setProductData(data)
        })
        ()
    },[])


    useEffect(()=>{
      (async function(){
        const resp=await fetch(`https://fakestoreapi.com/products/categories`);
        const categoriesData=await resp.json();
        setCategories(categoriesData)
      })
      ()
    },[])


    
  let object=basicOps(productData,searchTerm,sortDir,currentCategory,pageNum,pageSize) 
  let filteredCategoryData=object.filteredCategoryData
  let totalPages=object.totalPages
    
  return (
    <>
    <header className="nav_wrapper">
        <input className="search_input" type="text"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)
          setPageNum(1);
        }}
        />
        <div className="icon-container">
          <FaArrowAltCircleUp style={{color:"white"}} onClick={()=>{setSortDir(1) 
            setPageNum(1)}}/>
          <FaArrowAltCircleDown style={{color:"white"}} onClick={()=>{setSortDir(-1)
            setPageNum(1)
          }}/>
        </div>
        
    </header>
    <div className="categories_wrapper">
      <Categories categories={categories} setCurrentCategory={setCurrentCategory} ></Categories>
          
    </div>



    <main className="main-container">
       <ProductList productList={filteredCategoryData}></ProductList>
    </main>

    {/*Pagination*/}

    <div className='pagination'>
      <button onClick={()=>{
        if (pageNum == 1){
          return 
        
        }
        setPageNum((pageNum)=>pageNum-1)
        
      }} 
    disabled={pageNum == 1 ? true : false}
      ><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
      <div className="page-num">
        {pageNum}
      </div>
      <button onClick={()=>{
        if (pageNum == totalPages){
          return 
        }
        setPageNum((pageNum)=>pageNum+1)
      }}
      disabled={pageNum == totalPages ? true : false}
      ><MdKeyboardArrowRight></MdKeyboardArrowRight></button>

    </div>
    </>
  )
}

export default Home