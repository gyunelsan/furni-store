import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GoPerson } from "react-icons/go";


const Navbar = () => {
  return (
   <nav>
    <div className='desktopMenu'>
      <div>
        <a className='Logo' href="">Furni</a>
      </div>
    <ul className='d-flex '>
    <li>
      <Link className='hover selected_yellow ' to="/"> Home </Link>
    </li>
    <li >
    <Link className='hover' to="/shop"> Shop</Link>
    </li>
    <li>
     <Link className='hover' to="/about">About us</Link>
    </li>
    <li>
    <Link className='hover' to="/services">Services</Link>
    </li>
    <li>
    <Link className='hover' to="/blog">Blog</Link>
    </li>
    <li>
    <Link className='hover' to="/contact">Contact us</Link>
    </li>
    <GoPerson className='svg1' />
    <Link to="/bascet"><MdOutlineLocalGroceryStore  className='bascetIcon svg1' /></Link>
    
    </ul>
    
    </div>


    </nav>
  )
}

export default Navbar