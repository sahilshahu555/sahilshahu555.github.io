import { Box } from '@chakra-ui/react';

// import { GitHubCalendar } from 'github-calendar';

const GitHubCalendarComponent = () => {

  return (
    <Box padding={"2%"} className="react-activity-calendar " >
 <Box className="border-2 border-orange-500 rounded-2xl p-5" data-aos="zoom-in-up" data-aos-duration="1000">
      {/* Loading stuff */}
      <img className="w-full "  src="https://ghchart.rshah.org/sahilshahu555" alt="2016rshah's Github chart" />
    </Box>
    </Box>
   
  );
};

export default GitHubCalendarComponent;
