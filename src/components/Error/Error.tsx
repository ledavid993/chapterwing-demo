import Layout from '../Layout/Layout.component';
import { Text, Box, Heading, Flex } from '@chakra-ui/core';

interface Props {
  statusCode: number;
}

const Error: React.FC<Props> = ({ statusCode }) => {
  const statusPage = () => {
    switch (statusCode) {
      case 404:
        return (
          <Box>
            <Heading>{statusCode}</Heading>
            <Text>Page not found</Text>
          </Box>
        );
      default:
        return (
          <Box>
            <Heading>{statusCode}</Heading>
            <Text>Oops, something went wrong</Text>
          </Box>
        );
    }
  };

  return (
    <Layout>
      <Box w="100%" h="100vh">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          color="#d3d3d3"
        >
          {statusPage()}
        </Flex>
      </Box>
    </Layout>
  );
};

export default Error;
