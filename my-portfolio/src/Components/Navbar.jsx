import React from 'react'
import logo from "../Images/download.jpg"
const Navbar = () => {
  return (
    <div id="nav-menu" >
      {/* <img src={logo} alt="sahil" srcset="" /> */}
      
     <h1 className='logo'>SAHIL</h1>
        
       <ul >
          <a href="#home" className="item-a nav-link home" >Home</a> 
          <a href="#about"  className="item-a nav-link about">About</a>
          <a href="#skills" className="item-a nav-link skills"  >Skills</a>
          <a href="#projects" className="item-a nav-link projects" >Projects</a>
          <a href="#contact" className="item-a nav-link contact" >Contact </a>
          <a href="#resume" className="item-a nav-link resume"  >Resume</a>
      </ul>
    </div>
  )
}

export default Navbar
