import React from 'react'
import "./Services.css"
import Button from "../elements/Button"
import img1 from "../../assets/couch.png"
import truck from "../../assets/icons/truck.svg"
import bag from "../../assets/icons/bag.svg"
import support from "../../assets/icons/support.svg"
import returnicon from "../../assets/icons/return.svg"
import chairImage1 from "../../assets/product-1.png"
import chairImage2 from "../../assets/product-2.png"
import chairImage3 from "../../assets/product-3.png"

export const Services = () => {
    return (
      <div>
		<section className="panellSection">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="content">
								<h1>Services</h1>
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
				</div>
				<br /><br /><br />
			</section>
       
        <br /><br /><br /><br /><br /> 

        <section>
        <div className="container">
				
				
				<div className="row my-5">
					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={truck} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Fast &amp; Free Shipping</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={bag} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Easy to Shop</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={support} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>24/7 Support</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={returnicon} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Hassle Free Returns</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={truck} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Fast &amp; Free Shipping</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={bag} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Easy to Shop</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={support} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>24/7 Support</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src={returnicon} alt="Image" className="imf-fluid"/>
							</div>
							<h3 className='featureHeading'>Hassle Free Returns</h3>
							<p className='featureP'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
						</div>
					</div>

				</div>
			
			</div>
        </section>
        <br /><br /><br /><br /><br /><br />

        <section>
      <div class="product-section pt-0">
			<div class="container">
				<div class="row">

					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<button className='btn_grey'>Explore</button>
					</div> 
		
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img src={chairImage1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
					</div> 
					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img  src={chairImage2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>
					</div>
					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<img src={chairImage3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>
					</div>
					

				</div>
			</div>
		</div>
      </section>
      <br /><br /><br /><br /><br /><br />

       
  
      </div>
    )
  }
  