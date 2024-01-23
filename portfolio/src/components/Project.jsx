import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Myntra from './images/Myntra.png'
import Honey from './images/Onilne-honey-store.png'
import Portfolio from './images/Sahil-Portfolio.png'
import Glossier from './images/Glossier.png'
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
        <ProjectCard  tech="  PYTHON | JUPYTER LABS "   avatar="https://www.slideteam.net/media/catalog/product/cache/1280x720/e/m/employee_turnover_chart_with_termination_reasons_and_service_length_slide01.jpg" 
        
        name="EMPLOYEE TURNOVER ANALYSIS" desc="As the ML Developer assigned to the HR Department, we have been asked to create ML Programs to 
Perform data quality check by checking for missing values if any. 
Understand what factors contributed most to employee turnover by EDA. 
Perform clustering of Employees who left based on their satisfaction and evaluation. 
Handle the left Class Imbalance using SMOTE technique. 
Perform k-fold cross-validation model training and evaluate performance.  
Identify the best model and justify the evaluation metrics used.  
Suggest various retention strategies for targeted employees." />

        <ProjectCard  tech="  PYTHON | JUPYTER LABS "  avatar="https://i.ytimg.com/vi/nwnTHCvsX14/maxresdefault.jpg" name="SALES ANALYSIS" desc="
Currently experiencing a surge in business, AAL is actively pursuing expansion opportunities. To facilitate informed investment decisions, the CEO has assigned the responsibility to the Head of Sales and Marketing (S&M) at AAL. The specific tasks include: 
Identify the states that are generating the highest revenues. 
Develop sales programs for states with lower revenues. The Head of Sales and Marketing has requested your assistance with this task. 
Analyze the sales data of the company for the fourth quarter in Australia, examining it on a state-by-state basis. Provide insights to assist the company in making data-driven decisions for the upcoming year." />


        <ProjectCard  tech="  PYTHON | JUPYTER LABS | TABLEAU"   avatar="https://www.uneecops.com/wp-content/uploads/2022/08/Sales-Oppertunity-1024x574.png" name="COMPARISON OF SALES" desc="
The director of a leading organization wants to compare the sales between two regions. He has asked each region operators to record the sales data to compare by region. The upper management wants to visualize the sales data using a dashboard to understand the performance between them and suggest the necessary improvements.
 
Objective: Help the organization by creating a dashboard to visualize the sales comparison between two selected regions.
Datasets: Sample Superstore" />


        <ProjectCard  tech="  PYTHON | JUPYTER LABS "   avatar="https://databrio.com/storage/uploads/blog-images/FYTmQKy87XJzxo32KuuOLDIzVy3l9FI8qutlQid2.png" name="RETAIL ANALYSIS" desc="Performed Analysis Tasks on Walmart data
Basic Statistics tasks-
1.Which store has maximum sales
2.Which store has maximum standard deviation i.e., the sales vary a lot. Also, find out the coefficient of mean to standard deviation
3.Which store/s has good quarterly growth rate in Q3’2012
4.Some holidays have a negative impact on sales. Find out holidays which have higher sales than the mean sales in non-holiday season for all stores together
5.Provide a monthly and semester view of sales in units and give insights
Build Statistical Model- For Store 1 – Build prediction models to forecast demand" />
      </Box>
    </Box>
  )
}
