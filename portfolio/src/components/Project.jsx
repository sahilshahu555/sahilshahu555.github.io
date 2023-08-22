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
        <ProjectCard  tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://team-myntra.netlify.app/" avatar={Alcazar} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
        <ProjectCard  tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://team-myntra.netlify.app/" avatar={Alcazar} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
        <ProjectCard  tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://team-myntra.netlify.app/" avatar={Alcazar} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
        <ProjectCard  tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://team-myntra.netlify.app/" avatar={Alcazar} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
      </Box>
    </Box>
  )
}
