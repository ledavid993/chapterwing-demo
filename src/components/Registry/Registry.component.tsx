import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Stack,
  InputGroup,
  Button,
  InputLeftElement,
  Icon,
} from "@chakra-ui/core";
import clsx from "clsx";
import styles from "./Registry.module.scss";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
}

const Registry: React.FC<Props> = ({ isOpen, onRegistryClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Box className={clsx(styles.container, !isOpen && styles.hide)}>
      <Flex justifyContent="space-around">
        <Box className={clsx(styles.head, true && styles.active)}>
          SIGN IN
          {true && (
            <Box className={styles.lineSign} backgroundColor="primary.300" />
          )}
        </Box>
        <Box className={clsx(styles.head, false && styles.active)}>
          CREATE ACCOUNT{" "}
          {false && (
            <Box className={styles.lineCreate} backgroundColor="primary.300" />
          )}
        </Box>
      </Flex>
      <SignIn />
      <Flex justifyContent="space-around" marginTop="30px">
        <Button onClick={() => onRegistryClose()}>Cancel</Button>
        <Button variantColor="primary" onClick={() => onRegistryClose()}>
          Sign Up
        </Button>
      </Flex>
    </Box>
  );
};

const SignIn = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="100px"
    >
      <Image src="/icons/owl.svg" h="100px" w="100px" alt="owl" />
      <Text margin="10px 0" color="#d3d3d3" fontWeight="bold">
        Welcome, Please Sign in!
      </Text>
      <Box width="80%">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              fontSize="1.2em"
              children={<Icon name="email" color="gray.300" />}
            />
            <Input type="text" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              fontSize="1.2em"
              children={<Icon name="lock" color="gray.300" />}
            />
            <Input type="password" placeholder="Password" />
          </InputGroup>
        </Stack>
      </Box>
    </Box>
  );
};

export default Registry;
