import React, { useEffect, useState } from 'react';
import './Navbar.css'
import {Link} from "react-router-dom"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";





const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);

  const hamburgerClick = () => {
    setMenuOn(true)
  }

  const closeMenuClick = () =>{
    setMenuOn(false)
  }





  useEffect(() => {
    const listItems = document.querySelectorAll(".list");

    listItems.forEach((list) => {
      list.addEventListener("click", function() {
        
        listItems.forEach(item => item.classList.remove("selected_yellow"));
      
        this.classList.add("selected_yellow");
      });
    });

    
    return () => {
      listItems.forEach((list) => {
        list.removeEventListener("click", function() {
          listItems.forEach(item => item.classList.remove("selected_yellow"));
          this.classList.add("selected_yellow");
        });
      });
    };
  }, []);

  


  return (
   <nav>
    <div className='desktopMenu'>
    <div>
        <a className='Logo' href=""> Furni </a>
      </div>
    <ul className='d-flex '>
    <li>
      <Link className='list desktopNavs' to="/"> Home </Link>
    </li>
    <li>
    <Link className='list desktopNavs'   to="/shop"> Shop</Link>
    </li>
    <li>
     <Link className='list desktopNavs' to="/about">About us</Link>
    </li>
    <li>
    <Link className='list desktopNavs' to="/services">Services</Link>
    </li>
    <li>
    <Link className='list desktopNavs' to="/blog">Blog</Link>
    </li>
    <li>
    <Link className='list desktopNavs' to="/contact">Contact us</Link>
    </li>
    <GoPerson className='svg1 desktopSvg' />
    <Link to="/bascet"><MdOutlineLocalGroceryStore  className='bascetIcon svg1 desktopSvg' /></Link>
    <RxHamburgerMenu onClick={hamburgerClick } className='hamburger' />
    </ul>
    
    
    </div>


    { menuOn && <div className='mobileMenu'>
     
    <IoIosCloseCircleOutline onClick={closeMenuClick} className='closeMenuButton' />
    <ul className='d-flex row '>
    <div>
        <a className='Logo' href=""> Furni </a>
      </div>
    <li>
      <Link className='list' to="/"> Home </Link>
    </li>
    <li>
    <Link className='list'   to="/shop"> Shop</Link>
    </li>
    <li>
     <Link className='list' to="/about">About us</Link>
    </li>
    <li>
    <Link className='list' to="/services">Services</Link>
    </li>
    <li>
    <Link className='list' to="/blog">Blog</Link>
    </li>
    <li>
    <Link className='list' to="/contact">Contact us</Link>
    </li>
    
    <div className='d-flex mobileMenuIcons'>
    <GoPerson className='svg1' />
    <Link to="/bascet"><MdOutlineLocalGroceryStore  className='bascetIcon svg1' /></Link></div>
    </ul>
   
    </div>}
    


    </nav>
  )
}

export default Navbar