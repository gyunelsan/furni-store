import React, { useEffect, useState } from 'react'
import img1 from "../../assets/couch.png"
import grid1 from "../../assets/img-grid-1.jpg"
import grid2 from "../../assets/img-grid-2.jpg"
import grid3 from "../../assets/img-grid-3.jpg"
import "./Home.css"
import Button from "../elements/Button"
import chairImage1 from "../../assets/product-1.png"
import chairImage2 from "../../assets/product-2.png"
import chairImage3 from "../../assets/product-3.png"
import post1 from "../../assets/post-1.jpg"
import post2 from "../../assets/post-2.jpg"
import post3 from "../../assets/post-3.jpg"




function Home () {



  return (
    <div>
      <section className="panellSection">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="content">
								<h1>Modern Interior <span className="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<Button/>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src={img1} className="img-fluid"/>
							</div>
						</div>
					</div>
				</div><br /><br />
			</section>
      

      <section className='gridSection d-flex'>
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className='gridImages '>
          <img src={grid1} alt="" className='gridImage1' />
          <img src={grid2} alt="" className='gridImage2' />
          <img src={grid3} alt="" className='gridImage3'/>
        </div>
      </div>
      <div className="col-lg-5 ps-lg-5">
      <div className='gridText'>
          <h2 className='gridHeading mb-4'>We Help You Make Modern Interior Design</h2>
          
          <p className='textGrid'>Donec facilisis quam ut purus rutrum lobortis. 
            Donec vitae odio quis nisl dapibus malesuada. 
            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada.Aliquam vulputate velit imperdiet dolor tempor tristique. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <br />
          <button className='btn_grey'>Explore</button>

        </div>

      </div>
       
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br />
     
      <section>
      <div className="product-section pt-0">
			<div className="container">
				<div className="row">

					<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<button className='btn_grey'>Explore</button>
					</div> 
		
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img src={chairImage1} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>
					</div> 
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img  src={chairImage2} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>
					</div>
					
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img src={chairImage3} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>
					</div>
					

				</div>
			</div>
		</div>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br />


      <section className="blog-section">

      <div className="container">
				
				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<img src={post1} alt="Image" className="img-fluid"/>
							<div className="post-content-entry">
								<h3>First Time Home Owner Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson </span> <span> on Dec 19, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post2} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>How To Keep Your Furniture Clean</h3>
								<div className="meta">
									<span>by Robert Fox </span> <span>on Dec 15, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post3} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>Small Space Furniture Apartment Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 12, 2021 </span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>
        </div>
      </div>

      </section>

      





      {/* {
        Api.map( api=> {
          return(
            <div className='productsHome'>
            
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
      } */}

      

     

    </div>
  )
}

export default Home;
