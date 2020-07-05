import { Box, Heading, Text } from '@chakra-ui/core';
import { Layout } from '../../components';

const About = () => {
  return (
    <Layout>
      <Box color="#d3d3d3" padding="30px" whiteSpace="pre">
        <Box>
          <Heading>Purpose</Heading>
          <Text>The goal of ChapterWing is to:</Text>
          <Box padding="15px 25px">
            <ul>
              <li>
                provide useful, community-powered tools for those who are always looking for new
                ways to release their work
              </li>
              <li>
                provide an honest and transparent social platform that always respects its users
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Heading>About the creator</Heading>
          <Text>
            <p>
              This web app was created by David Nox (which is me). And I wanted a platform for
              authors' work to stand out from the rest
            </p>
            <p>And to stand out, it takes more than a good book.</p>
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
