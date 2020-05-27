import { Box, Flex, Text } from '@chakra-ui/core';
import { TiMessages } from 'react-icons/ti';

const props = {
  reviews: [],
};

const Review = () => {
  return (
    <Box margin="32px 0">
      <ReviewEmpty />
    </Box>
  );
};

const ReviewEmpty = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box background="#84b7c7" borderRadius="50%" display="inline-block" padding="20px" border="7px solid #0f4759">
        <TiMessages size="7em" color="white" />
      </Box>
      <Text color="#d3d3d3" fontWeight="bold" margin="16px 0">
        Nobody has posted a review yet
      </Text>
    </Flex>
  );
};

export default Review;
