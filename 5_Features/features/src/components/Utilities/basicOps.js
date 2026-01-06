export default function basicOps(productData,searchTerm,sortDir,currentCategory,pageNum,pageSize) {
    /* Filtering -> hiding the elements*/ 
     let filteredArr=productData;
    if (filteredArr != null){
        filteredArr=filteredArr.filter((elem)=>{
        let lowerSearchTerm=searchTerm.toLowerCase();
        
        let lowerTitle=elem.title.toLowerCase()
        return lowerTitle.includes(lowerSearchTerm)
    })

    }
    /* Sorting -> Rearranging*/ 
    let filteredSortedArr=filteredArr;
    
    if (sortDir != 0){
        if (sortDir == 1) {
        filteredSortedArr.sort(inComparater)
        }
        else{
        filteredSortedArr.sort(decComparater)
        }
    }

    /* Categorization*/ 
    let filteredCategoryData=filteredArr

    if (currentCategory !== "All Categories"){
      filteredCategoryData=filteredCategoryData.filter((product)=>{
        return product.category == currentCategory
      })
    }

    let totalPages=Math.ceil(filteredCategoryData.length / pageSize)
    

    let sidx= (pageNum - 1) * pageSize
    let eidx= sidx + pageSize
    // console.log(sidx,eidx)

    filteredCategoryData=filteredCategoryData.slice(sidx,eidx)
    
    return {filteredCategoryData,totalPages}

    
}

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