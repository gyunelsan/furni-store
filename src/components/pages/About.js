import React from 'react'
import "./About.css"
import Button from "../elements/Button"
import img3 from "../../assets/product-1.png"
import img4 from "../../assets/why-choose-us-img.jpg"

export const About = () => {
  return (
    <div>
      <section className='container_about d-flex'>
        <div className='content'>
          <h1>About Us</h1>
          <p>Donec vitae odio quis nisl dapibus malesuada.
            Nullam ac aliquet velit.
             Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
             <Button/>
        </div>
        <div>
        <img src={img3} alt="" />
        </div>
      </section>
      <section className='second_section_about d-flex'>
        <div className='chooseus_content'>
          <h2>Why Choose Us</h2>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        </div>
        <div><img className='whychooseus_img' src={img4} alt="" /></div>

      </section>
      

    </div>
  )
}
