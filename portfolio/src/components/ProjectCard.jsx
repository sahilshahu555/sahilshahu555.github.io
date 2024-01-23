import React from 'react'
import { Box, Button, Flex, Image, Text, Heading, Link} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const ProjectCard = ({name,desc,avatar,link,github,tech }) => {
  return (
    <Card  data-aos="zoom-in-down" data-aos-duration="1000" className="project-card" maxW={["290px", "sm", "350px", "md"]}  bg={"white"} color={"black"} border={"2px solid #f8572f"} >
      <CardHeader>

        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center'  flexWrap='wrap' >
            <Box data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" >  <Image id='card_img' 
              objectFit='cover'
              src={avatar}
              alt='Chakra UI'
            /></Box>
          </Flex>
        </Flex>

      </CardHeader>

      <CardBody>
        <Text color={"black"} mb={"20px"} mt={"10px"}> <Heading as='h3' className="project-title" fontSize={["lg","lg","3xl","2xl"]} 
        fontWeight='bold' > 
         {name}</Heading> </Text>
        <Text mt={"10px"} fontSize={["lg","lg","xl","xl"]} class="project-description" color="black" border={"1px solid blue"} >
        <b>Description :</b> {desc}
        </Text>
        <Text mt={"20px"} color={"black"} class="project-tech-stack" fontSize={["sm","sm"]}>  <span style={{ color: "orangered", fontWeight: "700" }}>TECH STACK :</span>{tech} </Text>
      </CardBody>


      

    </Card>
  )
}
