import { Text, Heading, Box } from '@chakra-ui/core';
import { Layout } from '../../components';

const Chapter = () => {
  return (
    <Layout>
      <Box padding="10px" marginTop="25px">
        <Heading color="white" fontSize="1.5rem">
          Chapter 56: I am a Dragon
        </Heading>
        <Text
          margin="40px 0"
          color="#d3d3d3"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing=".03em"
          whiteSpace="pre-wrap"
        >
          {`The same works for table columns, too, but then there has to be an element in the document that corresponds to the column. HTML provides COL for that. The table has to start with one COL for every column:

<table>
<col><col><col><col><col><col><col><col><col><col>
<tr><th>Month<th>'94<th>'95<th>'96...
(COL can be used for other things than style, but in this case all we need is that the COL elements are present.) The following rules give the first column a yellow background, and then every second column starting from column 3 a gray one:

col:first-child {background: #FF0}
col:nth-child(2n+3) {background: #CCC}`}
        </Text>
      </Box>
    </Layout>
  );
};

export default Chapter;
