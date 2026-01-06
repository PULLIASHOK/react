import React from 'react'
import { useContext,useState } from "react";


const PaginationContext=React.createContext()

export default function PaginationProvider({children}){
    const [pageSize,setPageSize]=useState(5)
    const [pageNum,setPageNum]=useState(1)
    
    return <PaginationContext.Provider value={{pageSize,pageNum,setPageNum,setPageSize}}>
        {children}

    </PaginationContext.Provider>
}

export function usePaginationContext () {
    return useContext(PaginationContext)
}
