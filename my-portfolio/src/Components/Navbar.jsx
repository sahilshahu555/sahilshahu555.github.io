import React from 'react'

const Navbar = () => {
  return (
    <div id="nav-menu" >
        <div><h1>Sahil Shahu</h1></div>
       <ul >
        <li class="item " ><a href="#home"   class="item-a nav-link-home" >Home</a></li>
        <li class="item" ><a href="#about"  class="item-a"  >About</a></li>
        <li class="item" ><a href="#skills" class="item-a"  >Skills</a></li>
        <li class="item" ><a href="#projects" class="item-a" >Projects</a></li>
        <li class="item" ><a href="#contact" class="item-a"  >Contact </a></li>
      </ul>
    </div>
  )
}

export default Navbar
