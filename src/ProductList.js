import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';
import { CiCirclePlus } from "react-icons/ci";

const products = [
  
  {   price: 50.00,
      name: "Nordic Chair",
      img: "https://untree.co/demos/furni/images/product-1.png",
      id: "1"},
  {
    price: 78.00,
    name: "Kruzo Aero Chair",
    img: "https://untree.co/demos/furni/images/product-2.png",
    id: "2"
  },
  {
    price: 43.00,
    name: "Ergonomic Chair",
    img: "https://untree.co/demos/furni/images/product-3.png",
    id: "3"
  },
  {
    price: 620.00,
    name: "White Sofa",
    img: "https://target.scene7.com/is/image/Target/GUEST_5de851d7-047e-4abe-9a08-c56ff4a0f93c?wid=1200&hei=1200&qlt=80&fmt=webp",
    id: "4"
  },
  {
    price: 1999.00,
    name: "Grey Velvet Sofa",
    img: "https://i0.wp.com/womacksofbawtry.co.uk/wp-content/uploads/2021/06/114343_0_1_1.webp?fit=2560%2C2560&quality=80&ssl=1",
    id: "5"
  },



];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <section className='productsSection'>
            <div className='card'>
            <img src={product.img} alt=""  className=''/>
            <div className="card-body">
            <h5 className="card-title">{product.name} </h5>
            <p className="card-text">${product.price}</p>
            
           
            <CiCirclePlus className='addIcon' onClick={() => dispatch(addItem(product))} />
          
            </div>
            </div>
            </section>
            
            
          </li>
        
        ))}
      </ul>
    </div>
  );
}

export default ProductList;