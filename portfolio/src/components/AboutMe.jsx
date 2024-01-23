import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <Box id="about" className="about section"  >
        {/* <Text > About me</Text> */}
      <Box className='about_left' data-aos="fade-down" >
        <img  src='https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz' />
      </Box> 
      <Box className='about_right' >
        <Box  data-aos-duration="1200" > <Text  fontSize={["25px", "25px", "33px", "3xl"]} fontWeight={"700"} >About me</Text> </Box>
        <Box >  <Text fontSize={["20px", "20px", "25px", "2xl"]} fontWeight={"700"}> <span style={{ color: "orangered" }}> Data Analyst </span>, Data Scientist </Text></Box>
        <Box className='about_me' > <Text m={"20px 0px"} id="user-detail-intro">Aspiring Data Scientist and Analyst with a passion for extracting meaningful insights from data. Strong analytical skills, a solid foundation in machine learning, and a commitment to leveraging data for informed decision-making</Text></Box>
        <Box ><Button  fontSize={"large"} size={["sm", "lg", "lg", "md"]} color={"white"} _hover={{ bg: "gray.200", color: "orangered", borderRadius: "10px" }} bg={"orangered"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box>
        {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i class="fa-solid fa-graduation-cap fa-xl"></i></span> : Masters in Computer Application, G.H. Raisoni College of Engineering, Nagpur</Text>
            <Divider />
            <Text   mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-phone fa-lg"></i> </span> : 9860927554</Text>
            <Divider />
            <Text  mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-envelope fa-lg"></i></span> : reenabarsagade@gmail.com</Text>
            <Divider />
            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-location-dot fa-xl"></i></span> : Nagpur, Maharashtra</Text>
            <Divider />
          </Box>
        </Box>}

      </Box>
    </Box>
  )
}
