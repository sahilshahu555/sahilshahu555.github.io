import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import { GitHubCalendar } from 'github-calendar';

const GitHubCalendarComponent = () => {

  return (
    <Box padding={"2%"} className="react-activity-calendar" >
 <Box className="calendar" data-aos="zoom-in-up" data-aos-duration="1000">
      {/* Loading stuff */}
      <img  src="https://ghchart.rshah.org/reenabarsagade" alt=" Github chart" />
    </Box>
    </Box>
   
  );
};

export default GitHubCalendarComponent;
