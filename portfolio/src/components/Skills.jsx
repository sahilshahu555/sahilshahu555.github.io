import { Box, Button, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [skillshow, setSkillShow] = useState(false)
  return (
    <Box  id="skills" >
      <Text data-aos="flip-up" data-aos-duration="1000"
        textAlign={"center"} margin={"auto"} w={"max-content"} padding={"10px"}
        borderRadius={"10px"}

       border={"4px solid"}
        color={"orangered"}
                fontWeight= "700"
        fontSize={["2xl", "2xl", "3xl", "4xl"]}>
          <span style={{ color: "black" ,fontWeight:"400"}}>
          Technical </span>
          Skills </Text>

      <Text data-aos="flip-down" data-aos-duration="1500"  textAlign={"center"} w={"max-content"} m={" 20px auto"} fontWeight="700">
        <Button fontSize={["xs", "sm", "2xl", "2xl"]} mb={"10px"} textAlign={"center"} onClick={() => setSkillShow((p) => !p)}
          _hover={{ bg: "gray.900", color: "orangered", borderRadius: "10px" }}
          color={"white"}
       
          bg={"orangered"}>{skillshow ? " See Data Scientist" : " See Training Specialist "}
          
        </Button>
      </Text>
    {/* skills */}
      <Box id='skill-container-inner'  className="skills-card"  >

        <Box id='skills_left'  className="skills-card-name"  >
          {skillshow ? (<Box className='left_dup' data-aos="fade-left" data-aos-duration="1000">
            <img className="skills-card-img" src="https://resumeworded.com/skills-and-keywords/img/training-specialist.jpeg" alt="" />
          </Box>) : (
          
          <Box id='left_real'  >

            <Text className='skillNameTitle' data-aos-duration="1000" margin={"auto"} mb={"20px"} border={"1px solid"}>Data Scientist </Text>
            <Box id='frontend_skills' data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" >
              <Box >   <img   className="skills-card-img" id='fontSkill_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/270px-Python.svg.png" alt="html5" /> <Text   className="skills-card-name"    id='skillName'  >Python</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://www.tutorialsteacher.com/Content/images/home/sql.png" alt="css3" />  <Text   className="skills-card-name"    id='skillName' >SQL</Text></Box>
              <Box >   <img  className="skills-card-img" id='fontSkill_img' src="https://miro.medium.com/v2/resize:fit:1001/1*vPezx00A1u0WAfS8e8wBXQ.png" alt="javascript" />  <Text   className="skills-card-name"    id='skillName' >Numpy</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://www.inventateq.com/top-stories/featured_image/tableau2.png" alt="react" /> <Text   className="skills-card-name"    id='skillName' >Tableau</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://cdn.worldvectorlogo.com/logos/redux.svg"  alt="redux" />  <Text     id='skillName'>Machine Learning</Text></Box>
              <Box >  <img  className="skills-card-img" id='fontSkill_img' src="https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2017/11/Power-BI-Desktop-Feature-image.jpg.webp" alt="chakra ui" />  <Text    className="skills-card-name"   id='skillName'>Power BI</Text></Box>
            </Box>
          </Box>
          )}

        </Box>

        <Box id='skills_right'  className="skills-card-name" >
          {skillshow ? (
          <Box id='right_real'  >

            <Text className='skillNameTitle' mb={"20px"}  border={"1px solid"}>Training Specialist </Text>
            <Box className='back_end_skills' data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"  >

              <Box> 
                <img className='skills-card-img' id='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR5_f6-RLHYNBQ40NxjafSEqp9olJZ5ndqSKW90jX8KzzJD8gUcSkmdHjXW-uY1ATukk&usqp=CAU" width="100px" alt="JSON" />
                 <Text    className="Training"   id=''> Presentation   </Text>
                </Box>

              <Box > 
                <img className='skills-card-img' id='backEnd_img' src="https://banner2.cleanpng.com/20180910/syr/kisspng-facilitator-facilitation-meeting-project-managemen-espn-launches-program-on-facebook-watch-actionte-5b97302dc0bbd3.8453628215366349257895.jpg" alt="java" /> <Text    className="Training"   id=''> Facilitation  </Text>
                </Box>

              <Box> 
                 <img className='skills-card-img' id='backEnd_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74hIOPNqdQ46mCsnrM4kiPZpN9mH9Pv_aDAl87JaxCa_K5xH7nIs0iQUodznCoVXKBa0&usqp=CAU" alt="nodejs" />  <Text    className="Training"   id=''> Content Creator  </Text>
              </Box>

              <Box>
                <img className='skills-card-img' id='backEnd_img' src="https://cdn.pixabay.com/photo/2021/02/03/11/57/microsoft-5977659_1280.png" alt="express" /> <Text    className="Training"   id=''> MS Office </Text>
                </Box>

              <Box> 
                 <img className='skills-card-img' id='backEnd_img' src="https://dme2wmiz2suov.cloudfront.net/User(12509894)/CourseBundles(4338)/651609-CRT_SOFT_SKILLS.jpg  " alt="mongodb" /> <Text    className="Training"   id=''> Soft Skills </Text>
                 </Box>

             < Box> 
              <img className='skills-card-img' id='backEnd_img' src="https://img.freepik.com/free-vector/illustration-work-experience-concept_53876-36918.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705708800&semt=ais" alt="nodejs" />  <Text    className="Training"   id=''> Training  </Text>
              </Box>
             
            </Box>
          </Box>) : (<Box className='right_dup' data-aos="fade-down">
            <img  className='skills-card-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijEZ34M2a6y0zjp_cHN96G5wJT22Jugcliw&usqp=CAU" alt="front end" />
          </Box>)}

        </Box>
      </Box>
    {/* tools */}
      <Box id='OtherSkills_container tools' class="skills-card" mt={"-80px"}>
        <Text  className='tool' data-aos-duration="1000" textAlign={"center"}  m={"auto"} color={"black"} borderRadius={"10px"} border={"4px solid orangered"} w={"max-content"}  fontWeight={"700"}>Tools</Text>
        <Box className='OtherSkills-inner' >


          <Box data-aos="flip-left" data-aos-duration="1500" >
            <img className='skills-card-img' id='tool_skill_img' src="https://miro.medium.com/v2/resize:fit:750/1*b1PpLl1-C8FWTLzNO3OqVA.jpeg " alt="" /> 
            <Text   className="skills-card-name"  width="106%" id='skillName'>Jupyter Notebook</Text>
             </Box>
          <Box data-aos="flip-right" data-aos-duration="1500" ><img className='skills-card-img' id='tool_skill_img' src="https://www.tutorialsteacher.com/Content/images/home/sql.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>SQL</Text> </Box>

          <Box data-aos="flip-left" data-aos-duration="1500" ><img className='skills-card-img' id='tool_skill_img' src="https://static.javatpoint.com/tutorial/matplotlib/images/matplotlib-tutorial.png" alt="" /> <Text   className="skills-card-name"    id='skillName' width="106%" >Matplotlib</Text> </Box>

          <Box data-aos="flip-right" data-aos-duration="1500" ><img className='skills-card-img' id='tool_skill_img' src="https://www.inventateq.com/top-stories/featured_image/tableau2.png" alt="" /> <Text   className="skills-card-name"    id='skillName'>Tableau</Text> </Box>
         
        </Box>

      </Box>
    </Box>
  )
}
