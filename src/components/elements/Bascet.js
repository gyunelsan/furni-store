import React from 'react'
import "./Bascet.css"
import productimg from "../../assets/product-1.png"
import { CiSquareRemove } from "react-icons/ci";
// import Cart from './Cart';
// import ProductList from './ProductList';
import Cart from '../../Cart';
// import ProductList from '../../ProductList';


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
          {/* <div>Quantity</div> */}
          {/* <div>Total</div> */}
          <div>Remove</div>
        
        </div>
        <hr />
      
      

        {/* <div className='d-flex justify-content-around products_cart'>
          <div><img className='productimg' src={productimg} alt="" /></div>
          <div>Nordic Chair</div>
          <div>50,00$</div>
          <div>+  <input className='inputQuantity' type="number" />  - </div>
          <div>50,00$</div>
          <div><CiSquareRemove className='remove-icon' /></div>
        </div>
        <hr /> */}
        <Cart/> 

       

      

      <div className='cart_buttons'>
      <button className='btn_grey'>Update Cart</button>
      <button className='btn_grey'>Continue Shopping</button>
      </div>
      

      <div className='totals'>
        <h3>CART TOTALS</h3>
        <br />
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$230.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$230.00</td>
          </tr>
        </table>
        <br /> <br />
        <button className='btn_grey'>Proceed To Checkout</button>
      </div>
 
       
      </section>
      
      
    </div>
  )
}

