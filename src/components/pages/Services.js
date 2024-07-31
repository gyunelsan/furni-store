import React from 'react'
import Button from "../elements/Button"
import img1 from "../../assets/couch.png"

export const Services = () => {
    return (
      <div>
        <section className='container_about d-flex'>
          <div className='content'>
            <h1>Services</h1>
            <p>Donec vitae odio quis nisl dapibus malesuada.
              Nullam ac aliquet velit.
               Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
               <Button/>
          </div>
          <div>
          <img src={img1} alt="" />
          </div>
        </section>
  
      </div>
    )
  }
  