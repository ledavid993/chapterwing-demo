import { Box, Heading, Text } from '@chakra-ui/core';
import { Layout } from '../../components';

const TermOfUser = () => {
  return (
    <Layout>
      <Box color="#d3d3d3" padding="30px" whiteSpace="pre">
        <Box>
          <Heading>Terms of use</Heading>
          <Text>The goal of ChapterWing is to:</Text>
          <Box padding="15px 25px">
            <ul>
              <li>
                Content The content of this web app is contributed and maintained by its users and
                is subject to change or be removed without notice. Content may be incomplete or
                contain inaccuracies.
              </li>
              <li>
                Data crawling All forms of data crawling are prohibited as it places stress on the
                server and increases server costs.
              </li>
              <li>
                Feedback Any feedback that you submit may be used to improve the web app without any
                compensation to you.
              </li>
              <li>
                Intellectual property By posting content on this web app you grant us the
                non-exclusive, royalty-free, sublicensable right to use and display your content on
                the web app. This agreement ends when you delete your content
              </li>
              <li>
                Links to external websites Our users may post links to external websites. We do not
                endorse or hold responsibility for the content of these websites.
              </li>
              <li>
                Responsibility Each user is responsible for any activity that occurs while using
                this web app. We do not claim liability for any content posted by our users.
              </li>
              <li>Changes to these terms We may make updates to these terms in the future.</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TermOfUser;
