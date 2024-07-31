import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import { CiSquareRemove } from "react-icons/ci";

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Cart;