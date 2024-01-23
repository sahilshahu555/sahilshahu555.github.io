import React from 'react'
import { Box, Button, Divider, Text } from '@chakra-ui/react'
import Virohan from './images/virohan.jpg'
import Wadhvani from './images/wadhvani.jpeg'

const Certificates = () => {
  return (
    <Box id='cer' class="" mt={"60px"} mb={"-80px"}>
        <Text  className='tool' data-aos-duration="1000" textAlign={"center"}  m={"auto"} color={"black"} borderRadius={"10px"} border={"4px solid orangered"} w={"max-content"}  fontWeight={"700"}>Certificates</Text>
        <Box className='OtherSkills-inner cer'  >


          <Box data-aos="flip-left" data-aos-duration="1500" width={"48%"} margin={"10px"}> 
          <Text   className="skills-card-name"  marginBottom={"10px"}   id='skillName'>OKR Champion</Text> 
          <img src={Virohan} width={"100%"}  alt='1'/>
          </Box>

          <Box data-aos="flip-right" data-aos-duration="1500" width={"40%"} margin={"10px"}> 
          <Text   className="skills-card-name" marginBottom={"10px"}   id='skillName'>Faculty Development Program</Text>
          <img src={Wadhvani} width={"100%"}  alt='2' />
         </Box>
          
         
        </Box>

      </Box>
  )
}

export default Certificates