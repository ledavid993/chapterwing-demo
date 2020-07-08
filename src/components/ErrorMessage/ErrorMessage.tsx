import { List, Text } from '@chakra-ui/core';

const ErrorMessage = ({ children }: any) => {
  return (
    <List
      styleType="disc"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Text color="#cc0000" fontSize="12px" whiteSpace="pre-wrap">
        {children}
      </Text>
    </List>
  );
};

export default ErrorMessage;
