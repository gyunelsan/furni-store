import React, { useEffect, useState } from 'react'
import img1 from "../../assets/couch.png"
import grid1 from "../../assets/img-grid-1.jpg"
import grid2 from "../../assets/img-grid-2.jpg"
import grid3 from "../../assets/img-grid-3.jpg"
import "./Home.css"
import Button from "../elements/Button"
import  axios from "axios";



function Home () {



  return (
    <div>
      <section className='panellSection d-flex'>
        <div className='content'>
          <h1>Modern Interior Design Studio</h1>
          <p>Donec vitae odio quis nisl dapibus malesuada.
            Nullam ac aliquet velit.
             Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
             <Button/>
        </div>
        
        <div>
        <img src={img1} alt="" />
        </div>
      </section>

      <section className='gridSection d-flex'>
        <div className='gridImages '>
          <img src={grid1} alt="" className='gridImage1' />
          <img src={grid2} alt="" className='gridImage2' />
          <img src={grid3} alt="" className='gridImage3'/>
        </div>
        <div className='gridText'>
          <h3 className='gridHeading'>We Help You Make Modern Interior Design</h3>
            <br />
          <p className='textGrid'>Donec facilisis quam ut purus rutrum lobortis. 
            Donec vitae odio quis nisl dapibus malesuada. 
            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada.Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <br /><br />
          <button className='btn_grey'>Explore</button>

        </div>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br />

     

    </div>
  )
}

export default Home;
