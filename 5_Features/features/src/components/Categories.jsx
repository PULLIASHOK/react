import React from 'react'
import { usePaginationContext } from './contexts/PaginationContexts'

function Categories(props) {
    const {categories,setCurrentCategory}=props
    const {setPageNum}=usePaginationContext();
  return (
    <>
    <button className="category-button" onClick={()=>{setCurrentCategory("All Categories")
      setPageNum(1)
    }}>All Categories</button>
      {categories.map((category)=>{
        return (<button className="category-button" 
          onClick={()=>
            {setCurrentCategory(category)
              setPageNum(1)
          }}>
            {category}</button>)
        
      })}
    </>
  )
}

export default Categories