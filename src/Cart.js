import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartSlice';
import { CiSquareRemove } from "react-icons/ci";
import {Link} from "react-router-dom"
import "./assets/cart.css"

function Cart() {
  


  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  const totalAmount = items.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleClearCart = () => {
    dispatch(clearCart());
  }


  return (
    <div>
      
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className='d-flex justify-content-around products_cart'>
            <div><img className='productimg' src={item.img} alt="" /></div>
            <div>{item.name}</div>
            <div>{item.price}$</div>
            <div><CiSquareRemove className='remove-icon' onClick={() => dispatch(removeItem(item.id))} /></div>

            </div>
            <hr />
           
          </li>
        ))}
      </ul>
<br /><br /><br />
    <div className='d-flex justify-content-around totals_container'>
      <div className='cart_buttons'>
      <button className='btn_grey' onClick={handleClearCart}>Clear Cart</button>
      
      <Link className='list'   to="/shop">
      <button className='btn_grey'>Continue Shopping</button></Link>
      
      </div>

     <div className='totals'>
      <h3>CART TOTALS</h3>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${totalAmount}</td>
          </tr>

          <tr>
            <td>Total</td>
            <td>${totalAmount}</td>
          </tr>

        </tbody>
      </table>
      <br /> 
      <button className='btn_grey'>Proceed To Checkout</button>
      <br />
     </div>

     </div><br /><br /><br /><br />







    </div>
  );
}

export default Cart;