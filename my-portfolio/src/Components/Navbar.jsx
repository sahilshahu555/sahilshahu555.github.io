import React from 'react'

const Navbar = () => {
  return (
    <div id="nav-menu" >
       
      
       <img src="https://de21-engine.flamingtext.com/netfu/tmp28005/coollogo_com-13702298.png" alt="sahil" srcset="" />
        
      
        
       <ul >
        <li className="item nav-link home" ><a href="#home" className="item-a " >Home</a></li>
        <li className="item nav-link about" ><a href="#about"  className="item-a"  >About</a></li>
        <li className="item nav-link skills" ><a href="#skills" className="item-a"  >Skills</a></li>
        <li className="item nav-link home projects" ><a href="#projects" className="item-a" >Projects</a></li>
        <li className="item nav-link contact" ><a href="#contact" className="item-a"  >Contact </a></li>
        <li className="item" ><a href="#contact" className="item-a nav-link resume"  >Resume</a></li>
      </ul>
    </div>
  )
}

export default Navbar
