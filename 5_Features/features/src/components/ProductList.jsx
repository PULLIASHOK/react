import React from 'react'

function ProductList(props) {
    const {productList}=props
  return (
    <>
    {productList == null ? <h3>Loading....</h3>:productList.map((product)=>{
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
    </>
  )
}

export default ProductList