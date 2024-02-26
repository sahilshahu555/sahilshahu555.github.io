import React from 'react'
import { Box, Button, Flex, Image, Text, Heading, Link} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const ProjectCard = ({name,desc,avatar,link,github,tech }) => {
  return (
    <Card  data-aos="zoom-in-down" data-aos-duration="1000" className="project-card" maxW={["290px", "sm", "350px", "md"]}  bg={"white"} color={"black"} border={"2px solid #f8572f"} >
      <CardHeader>

        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
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
         {desc}
        </Text>
        <Text mt={"10px"} color={"black"} class="project-tech-stack" fontSize={["lg","lg","xl","xl"]}>  <span style={{ color: "orangered", fontWeight: "700" }}>TECH STACK :</span>{tech} </Text>
      </CardBody>


      <CardFooter justify='space-between'  sx={{ '& > button': { minW: '136px', }, }} >
        <Flex justifyContent={"space-between"} padding={"0px 20px"} w={"100%"} gap={"20px"}>
          <Button id='card_soco' bg="orangered" size={["sm", "sm", "md", "md"]} color={"white"}  >   <Link className="project-github-link p-16 md:p-0" target='_blank' href={github} > <i className="fa-brands fa-github fa-2xl"></i> source code </Link> </Button>
          <Button id='card_soco'  bg="orangered" size={["sm", "sm", "md","md"]} color={"white"}> <Link className="project-deployed-link p-6" target='_blank' href={link}><i className="fa-solid fa-eye fa-2xl"></i> Live </Link></Button>
        </Flex>
      </CardFooter>

    </Card>
  )
}
