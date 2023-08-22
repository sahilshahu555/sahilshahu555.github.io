import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Alcazar from './images/Alcazar.png'
import Myntra from './images/Myntra.png'
import Bialetti from './images/Bialetti.png'


import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box id="projects" >

      <Text data-aos="fade-right" data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]} mb={"30px"}
         fontWeight={"700"} color={"black"} borderRadius={"10px"} border={"4px solid orangered"}
        className='project-title'
        textAlign={"center"}  w={'max-content'} margin={"40px auto"} padding={"0px 40px"}>Projects</Text>

      <Box className='project_main'>
        <ProjectCard  tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://649db92ef917bb0fe9195838--radiant-rabanadas-ca2929.netlify.app/" avatar={Alcazar} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
  <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" github="https://github.com/Dibakardebnath/Alcazar-project" link="https://alcazar-project.vercel.app " avatar={Myntra} name="Alcazar"   desc="Alcazae ustomer service-oriented with 4 years of career experience in Travel and Tourism industries. Possesses expertise in strategic partnership identification and development" />
       <ProjectCard tech="React | CSS | HTML | Chakra UI | JavaScript | JSON | Vercel" github="https://github.com/LuciferGod06/Bialetti_Project" link="https://bialetti-new-clone-project.vercel.app" avatar={Bialetti} name="Bialetti" desc="A captivating and user-friendly online platform showcasing the art of Italian coffee-making. Engaging design, rich content, and seamless navigation make it a delightful experience for coffee enthusiasts." />
  <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Vercel" github="https://github.com/Dibakardebnath/Alcazar-project" link="https://alcazar-project.vercel.app " avatar={Myntra} name="Alcazar"   desc="Alcazae ustomer service-oriented with 4 years of career experience in Travel and Tourism industries. Possesses expertise in strategic partnership identification and development" />
      
      </Box>
    </Box>
  )
}
