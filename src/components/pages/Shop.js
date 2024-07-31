import React from 'react'
import "./Shop.css"
import Api from "../api.json"
import { CiCirclePlus } from "react-icons/ci";
import ProductList from '../../ProductList';



export const Shop = () => {





  return (
    <div>
      <div className='container_shop'>
        <h3 className='heading_shop'>Shop</h3>
      </div>
      <br /><br /><br />
      {/* <section className='productsSection'>
      <div className="row align-items-center">
    <div className="col">
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quic</p>
    <CiCirclePlus className='addIcon'  />
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quic</p>
    <CiCirclePlus  className='addIcon' />
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quic</p>
    <CiCirclePlus  className='addIcon' />
  </div>
</div>
    </div>
  </div>
 
  
  

      </section> */}
      <br /><br /><br /><br /><br /><br />

      <ProductList/>
      {
        Api.map( api=> {
          return(
            <div className='d-flex'>
            
              <section className='productsSection'>
              <div className="card ">
                <img src={api.img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                 <h5 className="card-title">{api.name}</h5>
                 <p className="card-text">${api.price}</p>
                 <CiCirclePlus className='addIcon'  />
                 </div>
              </div>
              </section>
            
            </div>
          )
        })
      }





    </div>
 
      











  
  
  )
}
