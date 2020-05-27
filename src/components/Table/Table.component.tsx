import { Box, Flex, Text, Image } from "@chakra-ui/core";
import { Header } from "..";
import styles from "./Table.module.scss";

interface Props {
  name: string;
}

const Table: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Box width="100%" backgroundColor="#c4c4c410">
        <Header fontSize="14px">{name}</Header>
      </Box>
      <Box borderLeft="2px solid #d3d3d3" margin="5px" padding="0 10px">
        <TableList />
        <TableList />
        <TableList />
      </Box>
    </div>
  );
};

const TableList = () => (
  <Flex justifyContent="space-between" padding="10px">
    <Text color="#d3d3d3" fontSize="13px" fontWeight="bold">
      Chapter 1: Restart
    </Text>
    <Flex alignItems="center" justifyContent="center">
      <Image src="/icons/heart.png" alt="image" h="22px" w="22px" />
      <Text paddingLeft="5px" color="#d3d3d390" fontSize="12px">
        5 Likes
      </Text>
    </Flex>
  </Flex>
);

export default Table;
