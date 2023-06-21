import React from 'react'

const Navbar = () => {
  return (
    <div id="nav-menu" >
      
      
     <h1 className='logo'>SAHIL SHAHU</h1>
        
       <ul >
          <a href="#home" className="item-a nav-link home" >Home</a> 
          <a href="#about"  className="item-a nav-link about">About</a>
          <a href="#skills" className="item-a nav-link skills"  >Skills</a>
          <a href="#projects" className="item-a nav-link projects" >Projects</a>
          <a href="#contact" className="item-a nav-link contact" >Contact </a>
          <a href="#contact" className="item-a nav-link resume"  >Resume</a>
      </ul>
    </div>
  )
}

export default Navbar
