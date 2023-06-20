import React from 'react'

const Navbar = () => {
  return (
    <div id="nav-menu" style={{display:"flex",justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"lightblue",
    }}>
        <div><h1>Sahil Shahu</h1></div>
       <ul style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)", gap:"50px",
    }}>
        <li class="item" style={{listStyle: "none"}}><a href="#home" style={{textDecoration:"none",
         color:"black",
         fontWeight:"bold"
        }} 
    >Home</a></li>
        <li class="item"
        style={{listStyle: "none"}}
        ><a href="#about"
        style={{textDecoration:"none",
        color:"black",
        fontWeight:"bold"
       }}
        >About</a></li>
        <li class="item"
         style={{listStyle: "none"}}><a href="#skills"
         style={{textDecoration:"none",
        color:"black",
        fontWeight:"bold"
       }}
         >Skills</a></li>
        <li class="item"
         style={{listStyle: "none"}}
        ><a href="#projects"
        style={{textDecoration:"none",
        color:"black",
        fontWeight:"bold"
       }}
        >Projects</a></li>
        <li class="item" 
         style={{listStyle: "none"}}
        ><a href="#contact"
        style={{textDecoration:"none",
        color:"black",
        fontWeight:"bold"
       }}
        >Contact </a></li>
      </ul>
    </div>
  )
}

export default Navbar
