import React from 'react'
import img1 from "../../assets/couch.png"
import Button from "../elements/Button"
import "./Contact.css"

export const Contact = () => {
  return (
    <div>
      <section className='container_contact d-flex'>
        <div className='content'>
          <h1>Contact</h1>
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