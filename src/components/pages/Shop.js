import React, {useState} from 'react'
import "./Shop.css"

import ProductList from '../../ProductList';



export const Shop = () => {

  const [filter, setFilter] = useState('All');

  const handleFilterChange = (type) => {
    setFilter(type);
  };


  return (
    <div>
      
      <div className='container_shop'>
        <h3 className='heading_shop'>Shop</h3>
      </div>
      <br /><br /><br />

      <div className='productsFilter'>
        <div className='d-flex justify-content-around filterLists'>
        <li onClick={() => handleFilterChange('All')}>All Products</li>
        <li onClick={() => handleFilterChange('Livingroom')}>Living room</li>
        <li onClick={() => handleFilterChange('Sofa')}>Sofas</li>
        <li onClick={() => handleFilterChange('Chair')}>Chairs</li>
        <li onClick={() => handleFilterChange('Bed')}>Bed room</li>
        <li onClick={() => handleFilterChange('Bathroom')}>Bath room</li>
        <li onClick={() => handleFilterChange('Pillow')}>Pillows</li>
        <li onClick={() => handleFilterChange('Lamp')}>Lamps</li>
        <li onClick={() => handleFilterChange('Wallart')}>Wall Arts</li>
        </div>

      </div>
    
     <br /><br /><br />
      

      <ProductList filter={filter} />
      
      





    </div>
 
      











  
  
  )
}
