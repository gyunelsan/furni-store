import React from 'react'
import "./Bascet.css"
import Cart from '../../Cart';



export const Bascet = () => {
  
  return (
    <div>
        <section className='cart'>
        <div className='content_cart'>
          <h1 className='heading_cart'>Cart</h1>
        </div>
        <div className='d-flex justify-content-around cart_header'>
          <div>Image</div>
          <div>Product</div>
          <div>Price</div>
          <div>Remove</div>
        
        </div>
        <hr />
        <Cart/>    
      </section>
      
      
    </div>
  )
}

