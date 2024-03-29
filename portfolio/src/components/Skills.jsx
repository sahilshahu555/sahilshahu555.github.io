import { Box,  Text } from '@chakra-ui/react'
import React from 'react'


export const Skills = () => {
  
  return (
    <Box  id="skills" >
      <Text data-aos="flip-up" data-aos-duration="1000"
        textAlign={"center"} margin={"auto"} w={"max-content"}
        borderRadius={"10px"}
        className="p-2"
       border={"2px solid"}
        color={"orangered"}
        fontWeight= "700"
        fontSize={["2xl", "2xl", "3xl", "4xl"]}>
          <span style={{  fontWeight:"400"}} className='text-black '>
          Technical </span>
          Skills </Text>

      <Text data-aos="flip-down" data-aos-duration="1500"  textAlign={"center"} w={"max-content"} m={" 20px auto"} fontWeight="700">
       
      </Text>

      <Box id='skill-container-inner'  className=" flex items-center flex-col md:flex-row mb-10 "  >

      

        <Box id='skills_left'  className="skills-card-name p-10 flex flex-col-reverse items-center gap-10 text-center "  >
        
          <Box className=" h-[25rem] md:h-[16rem]"  >

            <Text className='skillNameTitle' data-aos-duration="1000" margin={"auto"} mb={"0px"} border={"1px solid"}>Front End </Text>
            <Box id='frontend_skills' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" >
              <Box >   <img   className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html5" /> <Text   className="skills-card-name"    id='skillName'  >HTML</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://img.freepik.com/free-icon/css_318-698167.jpg" alt="css3" />  <Text   className="skills-card-name"    id='skillName' >CSS</Text></Box>
              <Box >   <img  className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="javascript" />  <Text   className="skills-card-name"    id='skillName' >javascript</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ6ZmsiCzSC16bStr1KjZNcIBW5hAMa1ek6xoNeSSw5wQouq_N7dQCxlxI02TIeZk1e0&usqp=CAU" alt="react" /> <Text   className="skills-card-name"    id='skillName' >React</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="redux" />  <Text      id='skillName'>Redux</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="chakra ui" />  <Text    className="skills-card-name"   id='skillName'>Chakra UI</Text></Box>
            </Box>
          </Box>

          <Box className='' data-aos="fade-left" data-aos-duration="1000">
            <img className="skills-card-img rounded-3xl h-[16rem] w-full m-auto" src="https://phpdots.com/wp-content/uploads/2021/12/api-backend-banner.svg" alt="" />
          </Box>
        
        </Box>
       
        <Box id='skills_right'  className="skills-card-name p-10 flex flex-col items-center gap-10 text-center" >

        <Box className=' ' data-aos="fade-down">
          <img  className='skills-card-img rounded-3xl h-[16rem] w-full m-auto' src="https://www.naukri.com/cloudgateway-fastforward/ff-content-services/v0/unauth/cms/photo?id=4596958d2ce330083af82b50e7b26636662c83f25061cc349fe4c8d3c4ffeb9cc47cd2e6b19d5140efa36f71b3811061e454b54943e416c0ad217192a687eb349eb160942a1ee009113f03cb115cb3db&postTypeId=c4eff10da33c562d3e88af8f60fcf6cecdf3e35370f49177&source=ff" alt="front end" />
        </Box>
        
        <Box className=" h-[25rem] md:h-[16rem]"  >

          <Text className='skillNameTitle' mt={"0px"}  border={"1px solid"}>Back End </Text>
          <Box className='back_end_skills' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" >
            <Box> <img className='skills-card-img' id='backEnd_img' src="https://openautomationsoftware.com/wp-content/uploads/2016/07/JSON-icon-2.jpg" alt="JSON" /> <Text    className="skills-card-name"   id='skillName'> JSON </Text></Box>
            <Box > <img className='skills-card-img' id='backEnd_img' src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" alt="java" /> <Text    className="skills-card-name"   id='skillName'> Java </Text></Box>
            <Box>  <img className='skills-card-img' id='backEnd_img' src="https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png" alt="nodejs" />  <Text    className="skills-card-name"   id='skillName'> Node.js </Text></Box>
            <Box><img className='skills-card-img' id='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81s2BetKvsvix5szaKt2gQyX12huNnD7TdA&usqp=CAU" alt="express" /> <Text    className="skills-card-name"   id='skillName'> Express.js </Text></Box>
            <Box>  <img className='skills-card-img' id='backEnd_img' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="mongodb" /> <Text    className="skills-card-name"   id='skillName'> MongoDB </Text></Box>
           < Box>  <img className='skills-card-img' id='backEnd_img' src="https://ih1.redbubble.net/image.3481290663.8913/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="nodejs" />  <Text    className="skills-card-name"   id='skillName'> mongoose </Text></Box>
           
          </Box>
        </Box>
      
       
       

        </Box>
        
      </Box>
    
      <Box id='OtherSkills_container' className="skills-card  " >
        <Text  className='tool' data-aos-duration="1000" textAlign={"center"}  m={"auto"} color={"black"} borderRadius={"10px"} border={"2px solid orangered"} w={"max-content"}  fontWeight={"700"}>Tools</Text>
        <Box className='OtherSkills-inner ' >


          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Git</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://img.icons8.com/?size=1x&id=LoL4bFzqmAa0&format=png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Github</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" /> <Text   className="skills-card-name"    id='skillName'>Postman</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Netlify</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img2' src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" alt="" /> <Text   className="skills-card-name"    id='skillName'>Vercel</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img2' src="https://cdn.wmaraci.com/nedir/json.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>JSON</Text> </Box>
          <Box data-aos="flip-left" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Heroku</Text> </Box>
          <Box data-aos="flip-right" data-aos-duration="1500"><img className='skills-card-img' id='tool_skill_img' src="https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg" alt="" /> <Text   className="skills-card-name"    id='skillName'>NPM</Text> </Box>
        </Box>

      </Box>
    </Box>
  )
}
