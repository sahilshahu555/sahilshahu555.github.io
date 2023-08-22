import React from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Project } from './Project'
import { Contacts } from './Contacts'
import { Box} from '@chakra-ui/react'
import { Intro } from './Intro'

import "./Home.css"

import { Stats } from './Stats'

export const Home = () => {
    return (
        <Box id="home">

            <Intro />

            <AboutMe />

            <Skills />

            <Project />

            <Stats />

            <Contacts />
        </Box>
    )
}
