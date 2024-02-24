import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Myntra from './images/Myntra.png'
import Honey from './images/Onilne-honey-store.png'
import Portfolio from './images/Sahil-Portfolio.png'
import Glossier from './images/Glossier.png'
import BookMyMovie from './images/BookMyMovie.png'

import imageAI from './images/imageAI.png'

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

         <ProjectCard  tech=" NEXT.JS | REACT |TAILWIND_CSS |TYPESCRIPT |STRIPE |CLOUDINARY | NODE | MONGODB | Netlify" github="https://github.com/sahilshahu555/image-ai" link="https://image-ai1.netlify.app" avatar={imageAI} name="ImageAI" desc="REAL Software-as-a-Service app with AI features and payments & credits system that you might even turn into a side income or business idea using Next.js 14, Clerk, MongoDB, Cloudinary AI, and Stripe. " />

        <ProjectCard  tech="  REACT | CHAKRA | REDUX | JSON | Netlify" github="https://github.com/sahilshahu555/honeySahil" link="https://honeystore1.netlify.app/" avatar={Honey} name="Honey" desc="We are a company specializing only in Honey. By collecting honey from the very ground level, and  we have made available the best quality honey and other products from the Bee Hive. " />

        <ProjectCard  tech="  HTML | CSS | JavaScript | JSON | Netlify" github="https://github.com/sahilshahu555/Glossier" link="https://glossier-ten.vercel.app/" avatar={Glossier} name="Glossier" desc="Online Female Beauty Product Shop clone built with the use of HTML CSS and Javascript. A beauty website and community devoted to sharing real information" />

        <ProjectCard  tech=" NEXT.JS | REACT |TAILWIND_CSS | NODE | MONGODB | VERCEL" github="https://github.com/sahilshahu555/book_my_movie_next" link="https://bookmymovie1.netlify.app/" avatar={BookMyMovie} name="BookMyMovie" desc="Book My Movie is India's leading entertainment destination and the one-stop-shop for every out-of-home entertainment need." />

        <ProjectCard  tech="  HTML | CSS | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://myntra111.netlify.app/" avatar={Myntra} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />

        <ProjectCard  tech="  REACT | CHAKRA | REDUX | JSON | GH-PAGES" github="https://github.com/sahilshahu555/sahilshahu555.github.io" link="https://sahilshahu555.github.io/" avatar={Portfolio} name="Portfolio" desc=" Passionate MERN Stack Developer. Worked on various modern technologies such as React, MongoDB, Express.js, and Node.js.Seeking new opportunities to contribute and enhance skills." />

      </Box>
    </Box>
  )
}
