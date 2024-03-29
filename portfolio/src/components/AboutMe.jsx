import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <Box  className=" flex flex-col md:flex-row items-center p-5 -mt-10 "  >
        {/* <Text > About me</Text> */}
      <Box className='about_left ' data-aos="fade-down" >
        <img  src='https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz' alt="photo" className='h-72 -mt-5' />
      </Box> 
      <Box className='about_right' >
        <Box  data-aos-duration="1200" > <Text  fontSize={["25px", "25px", "33px", "3xl"]} fontWeight={"700"} >About me</Text> </Box>
        <Box >  <Text fontSize={["20px", "20px", "25px", "2xl"]} fontWeight={"700"}> <span style={{ color: "orangered" }}> Full Stack </span>Web Developer </Text></Box>
        <Box className='about_me' > <Text m={"20px 0px"} id="user-detail-intro">I am a passionate web developer driven by a relentless
          pursuit of excellence. With a meticulous attention to detail and
          a commitment to delivering pixel-perfect designs, I create immersive
          and engaging web experiences  with the help of CSS , HTML , Javascript , React , MongoDB that leave a lasting impression</Text></Box>
        <Box ><Button  fontSize={"large"} size={["sm", "lg", "lg", "md"]} color={"white"} _hover={{ bg: "gray.200", color: "orangered", borderRadius: "10px" }} bg={"orangered"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box>
        {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i className="fa-solid fa-graduation-cap fa-xl"></i></span> : Bachelor's Degree in Mechanical Engineering from Priyadarshani College of Engineering, Nagpur</Text>
            <Divider />
            <Text   mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i className="fa-solid fa-phone fa-lg"></i> </span> : 9359216799</Text>
            <Divider />
            <Text  mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i className="fa-solid fa-envelope fa-lg"></i></span> : sahilshahu555@gmail.com</Text>
            <Divider />
            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i className="fa-solid fa-location-dot fa-xl"></i></span> : Nagpur, Maharashtra</Text>
            <Divider />
          </Box>
        </Box>}

      </Box>
    </Box>
  )
}
