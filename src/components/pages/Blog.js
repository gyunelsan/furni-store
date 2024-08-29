import React from 'react'
import Button from "../elements/Button"
import img1 from "../../assets/couch.png"
import post1 from "../../assets/post-1.jpg"
import post2 from "../../assets/post-2.jpg"
import post3 from "../../assets/post-3.jpg"
import post4 from "../../assets/post4.jpg"
import post5 from "../../assets/post5.jpg"
import post6 from "../../assets/post6.jpg"
import post7 from "../../assets/post7.jpg"
import post8 from "../../assets/post8.jpg"
import post9 from "../../assets/post9.jpg"

export const Blog = () => {
    return (
    <div>

           <section className="panellSection">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="content">
								<h1>Blog</h1>
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


        

        <br /><br /><br /><br /><br /><br />

        <div className="blog-section">
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
							<a href="#" className="post-thumbnail"><img src={post3} alt="Image" class="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>Small Space Furniture Apartment Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 12, 2021 </span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post4} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>First Time Home Owner Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 19, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post5} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>How To Keep Your Furniture Clean</h3>
								<div className="meta">
									<span>by Robert Fox</span> <span>on Dec 15, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post6} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>Small Space Furniture Apartment Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 12, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post7} alt="Image" class="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>First Time Home Owner Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 19, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post8} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>How To Keep Your Furniture Clean</h3>
								<div className="meta">
									<span>by Robert Fox</span> <span>on Dec 15, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-5">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src={post9} alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3>Small Space Furniture Apartment Ideas</h3>
								<div className="meta">
									<span>by Kristin Watson</span> <span>on Dec 12, 2021</span>
								</div>
                <br /><br />
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>


             
				
				

       

        
			
    
  
      </div>
    )
  }
  