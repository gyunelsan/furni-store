import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from './wishlistSlice';
import { addItem } from './cartSlice';
import { CiCirclePlus } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import "./assets/cart.css"

const products = [
  { price: 490.00,
    name: "Canopy Bed",
    img: "https://i.pinimg.com/564x/04/fc/91/04fc91319187e75423c08e6fa4b29845.jpg",
    id: "1",
    type:"Bed"

  },
  {
    price: 350.00,
    name: "Quinn Grey Bed",
    img: "https://i.pinimg.com/474x/e0/0c/80/e00c80c46d8fc27c0d1b7081a63f8faf.jpg",
    id: "2",
    type:"Bed"
  },
  {
    price: 620.00,
    name: "White Sofa",
    img: "https://target.scene7.com/is/image/Target/GUEST_5de851d7-047e-4abe-9a08-c56ff4a0f93c?wid=1200&hei=1200&qlt=80&fmt=webp",
    id: "3",
    type:"Sofa"
  },
  {
    price: 43.00,
    name: "Classic Bed",
    img: "https://i.pinimg.com/564x/48/ec/ea/48ecea49facb2204ce40e24b2e561c20.jpg",
    id: "4",
    type:"Bed"
  },
  
  {
    price: 1999.00,
    name: "Grey Velvet Sofa",
    img: "https://i0.wp.com/womacksofbawtry.co.uk/wp-content/uploads/2021/06/114343_0_1_1.webp?fit=2560%2C2560&quality=80&ssl=1",
    id: "5",
    type:"Sofa"
  },
  { 
    price: 2399.00,
    name: "Sofa Sienna",
    img: "https://i.pinimg.com/564x/fd/ae/d1/fdaed164627f472ad17f7e02749e90e1.jpg",
    id: "6",
    type:"Sofa"
  },
  {
    price: 659.00,
    name: "Chair Grey Velvet",
    img:"https://i0.wp.com/womacksofbawtry.co.uk/wp-content/uploads/2022/03/114344.webp?fit=2560%2C2560&quality=80&ssl=1",
    id: "7",
    type:"Chair"
  },
  {
    price: 869.00,
    name: "Camden Sideboard",
    img:"https://reclaimedwarehouse.com/cdn/shop/products/dov38025---front-three-quarter.jpg?v=1677605671&width=713",
    id: "8",
    type:"Livingroom"
  },
  {  price: 50.00,
    name: "Nordic Chair",
    img: "https://untree.co/demos/furni/images/product-1.png",
    id: "9",
    type:"Chair"
  },
  {
    price: 78.00,
    name: "Kruzo Aero Chair",
    img: "https://untree.co/demos/furni/images/product-2.png",
    id: "10",
    type:"Chair"
  },
  {
    price: 43.00,
    name: "Ergonomic Chair",
    img: "https://untree.co/demos/furni/images/product-3.png",
    id: "11",
    type:"Chair"
  },
  {
    price: 620.00,
    name: "White Sofa",
    img: "https://target.scene7.com/is/image/Target/GUEST_5de851d7-047e-4abe-9a08-c56ff4a0f93c?wid=1200&hei=1200&qlt=80&fmt=webp",
    id: "12",
    type:"Sofa"
  },
  
 
  { 
    price: 2100.00,
    name: "Reese Sofa",
    img: "https://franceandson.com/cdn/shop/files/100061-007_FRT_1_58e9d8e5-741c-4ab1-938e-cd4033d069b1.jpg?v=1717972517&width=1800",
    id: "13",
    type:"Sofa"
  },
  { 
    price: 450.00,
    name: "Carmel Small Cabinet",
    img: "https://franceandson.com/cdn/shop/files/106692-003_FRT_1.jpg?v=1722530462&width=1800",
    id: "14",
    type:"Livingroom"
  },
  {
    price: 999.00,
    name: "Chinar Table",
    img: "https://i.pinimg.com/564x/3b/3e/0c/3b3e0c79640d205bb13e8201666bced1.jpg",
    id:"15",
    type:"Livingroom"
  },
  { 
    price: 89.00,
    name: "Carrie Stool",
    img: "https://franceandson.com/cdn/shop/files/108498-007_FRT_1_26f071e8-2df6-4c77-a482-e8f3f9623de6.jpg?v=1722525262&width=1800",
    id: "16",
    type:"Livingroom"
  },
  {
    price: 430.00,
    name: "Pars Chair",
    img: "https://dd3ka9h4chfr8.cloudfront.net/image/725136000567/image_ev6ehuk57h2hhbgr0fq4pq5n55/-S1200x1200-FJPG/238393-001_FRT_1.jpg",
    id: "17",
    type:"Chair"
  },
  { 
    price: 109.00,
    name: "Khaki Chair",
    img: "https://i.pinimg.com/736x/3f/30/80/3f3080b11336228327e6929a2bc8d877.jpg",
    id: "18",
    type:"Chair"
  },
  { 
    price: 99.00,
    name: "Modern Soft Chair",
    img: "https://i.pinimg.com/564x/ee/01/df/ee01df7c60fee4bb94a10e746b4a46cf.jpg",
    id: "19",
    type:"Chair"
  },
  { 
    price: 2399.00,
    name: "Velure Elegant Chair",
    img: "https://i.pinimg.com/564x/1b/01/04/1b0104535113adee14fef08efe84b3c9.jpg",
    id: "20",
    type:"Chair"
  },
  { 
    price: 699.00,
    name: "Cannonball Bed",
    img: "https://i.pinimg.com/564x/3a/aa/d2/3aaad2f0e645f766d7d1f590fd197737.jpg",
    id: "21",
    type:"Bed"
  },
  { 
    price: 749.00,
    name: "Pink Queen Bed",
    img: "https://i.pinimg.com/564x/77/20/41/772041e3a82f1f138a47d15e8c01c787.jpg",
    id: "22",
    type:"Bed"
  },
  { 
    price: 49.00,
    name: "Pillow combination",
    img: "https://i.pinimg.com/564x/61/76/fa/6176fad07a4f0373ff508d6a9f8140d9.jpg",
    id: "23",
    type:"Pillow"
  },
  { 
    price: 29.00,
    name: "Afralia Pillow",
    img: "https://i.pinimg.com/564x/b9/36/a6/b936a6bd260f9e0326cd60ffbbc49eee.jpg",
    id: "24",
    type:"Pillow"
  },
  { 
    price: 40.00,
    name: "Miniature Lamp",
    img: "https://i.pinimg.com/564x/09/94/fb/0994fb9e425eb2fb83f7f93830b4f58a.jpg",
    id: "25",
    type:"Lamp"
  },

  { 
    price: 29.00,
    name: "Green Throw Pillow",
    img: "https://i.pinimg.com/564x/d3/b1/03/d3b1031463f83371892fdbfeccaefea7.jpg",
    id: "26",
    type:"Pillow"
  },
  { 
    price: 40.00,
    name: "Miniature Lamp",
    img: "https://i.pinimg.com/564x/71/b6/2e/71b62e3b3dd3cfc51e74a58773602dbd.jpg",
    id: "27",
    type:"Lamp"
  },
  { 
    price: 40.00,
    name: "Pink Desk Lamp",
    img: "https://i.pinimg.com/564x/71/1c/a2/711ca2dd48ae01b047fe6d81663012f2.jpg",
    id: "28",
    type:"Lamp"
  },
  { 
    price: 299.00,
    name: "Oil Painting Art",
    img: "https://i.pinimg.com/564x/ad/e5/d3/ade5d36ff877244ea7390371d63922f7.jpg",
    id: "29",
    type:"Wallart"
  },
  { 
    price: 40.00,
    name: "Eurosvet Lamp",
    img: "https://i.pinimg.com/564x/8d/1f/00/8d1f000a653c5bdfd9d0346876c5181c.jpg",
    id: "30",
    type:"Lamp"
  },

  { 
    price: 199.00,
    name: "Abstract Wall Art",
    img: "https://i.pinimg.com/564x/c2/02/e6/c202e614e1a04178e610b14deeb449ca.jpg",
    id: "31",
    type:"Wallart"
  },
  {
    price: 879.00,
    name: "Arzus Horse Art",
    img: "https://i.pinimg.com/564x/38/87/c1/3887c1a4fe89f1ba2201e7aadb20aea8.jpg",
    id:"32",
    type:"Wallart"
  },
  {
    price: 999.00,
    name: "Dining Table",
    img: "https://i.pinimg.com/564x/1a/d8/3a/1ad83adb8c9b712b8685cdaa9ccbf54e.jpg",
    id:"33",
    type:"Livingroom"
  },
  
  {
    price: 78.00,
    name: "Carrie Counter Stool",
    img: "https://franceandson.com/cdn/shop/files/108498-003_FRT_1_eb54e368-ab5f-48b9-8e1b-cd3fadf5dfd2.jpg?v=1717163108&width=1800",
    id: "34",
    type:"Livingroom"
  },
  {
    price: 779.00,
    name: "Dining Table",
    img: "https://i.pinimg.com/564x/b7/5d/74/b75d74411ac846ea11ca8b736fb88ef4.jpg",
    id:"35",
    type:"Livingroom"
  },
  {
    price: 1299.00,
    name: "Marble Table",
    img: "https://i.pinimg.com/564x/c8/d9/0e/c8d90e0c51475b41db0321a3f114d98f.jpg",
    id:"36",
    type:"Livingroom"
  },
  {
    price: 499.00,
    name: "4 Door Cabinet",
    img: "https://i.pinimg.com/564x/e0/b2/0c/e0b20c9f0ba88cb00460ababc4804a12.jpg",
    id:"37",
    type:"Livingroom"
  },
  {
    price: 499.00,
    name: "Bath Vanity",
    img: "https://i.pinimg.com/564x/e1/2c/50/e12c500534420e5cd49ccf45dc0e2a09.jpg",
    id:"38",
    type:"Bathroom"
  },
  {
    price: 499.00,
    name: "Luxury Vanity",
    img: "https://i.pinimg.com/564x/6a/e6/74/6ae674c019f6b927ff055714743b5c85.jpg",
    id:"39",
    type:"Bathroom"
  },
  {
    price: 299.00,
    name: "Grey Abstract Art",
    img: "https://i.pinimg.com/564x/70/a5/c6/70a5c63be971530aa05d0d9ae666ed97.jpg",
    id:"40",
    type:"Wallart"
  },
  {
    price: 449.00,
    name: "Black Bath",
    img: "https://i.pinimg.com/564x/30/a4/9a/30a49a87d83cf337209b16830633fc45.jpg",
    id:"41",
    type:"Bathroom"
  },
  {
    price: 449.00,
    name: "White Classic Bath",
    img: "https://i.pinimg.com/564x/70/fa/b9/70fab9f127e42ad4a3387c643a1c8cca.jpg",
    id:"42",
    type:"Bathroom"
  },
  {
    price: 59.00,
    name: "Classic Washstand",
    img: "https://i.pinimg.com/564x/b7/6a/37/b76a37ab40fa171a1d8787e13b0b0d50.jpg",
    id:"43",
    type:"Bathroom"
  },


];

function ProductList({ filter }) {
  const dispatch = useDispatch();
  

  const wishlist = useSelector(state => state.wishlist.items);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); 
  };
 


  const handleToggleWishlist = (product) => {
    dispatch(toggleItem({ id: product.id }));
  };

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.type === filter);

  return (
    <div>
      {showNotification && (
     <div className='addedtocartWrapper show'>
        <MdDone /> Product added to cart
     </div>
)}

      <ul className='productsUl'>
      {filteredProducts.map(product => (
          <li key={product.id}>
            <section className='productsSection'>
            <div className='card'>
            <FaHeart className={`heartIcon ${wishlist.includes(product.id) ? 'heartIconAdded' : ''}`}
                  onClick={() => handleToggleWishlist(product)} />
            <img src={product.img} alt=""  className=''/>
            <div className="card-body">
            <h5 className="card-title">{product.name} </h5>
            <p className="card-text">${product.price}</p>
            
           
            <CiCirclePlus className='addIcon'  onClick={() => handleAddToCart(product)}/>
          
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