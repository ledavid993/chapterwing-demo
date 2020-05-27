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
} from '@chakra-ui/core';
import clsx from 'clsx';
import styles from './Registry.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
}

const Registry: React.FC<Props> = ({ isOpen, onRegistryClose }) => {
  const [isSignIn, toggleSignIn] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const onClick = () => {
    toggleSignIn(!isSignIn);
  };

  return (
    <Box className={clsx(styles.container, !isOpen && styles.hide)}>
      <Flex justifyContent="space-around">
        <Box className={clsx(styles.head, isSignIn && styles.active)} onClick={() => onClick()}>
          SIGN IN
          {isSignIn && <Box className={styles.lineSign} backgroundColor="primary.300" />}
        </Box>
        <Box className={clsx(styles.head, !isSignIn && styles.active)} onClick={() => onClick()}>
          CREATE ACCOUNT{' '}
          {!isSignIn && <Box className={styles.lineCreate} backgroundColor="primary.300" />}
        </Box>
      </Flex>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="100px"
      >
        <Image src="/icons/owl.svg" h="100px" w="100px" alt="owl" />
        {isSignIn ? (
          <SignIn message=" Welcome, Please Sign in!" />
        ) : (
          <CreateAccount message="New? Please Create Around." />
        )}
      </Box>
      <Flex justifyContent="space-around" marginTop="30px">
        <Button onClick={() => onRegistryClose()}>Cancel</Button>
        {isSignIn ? (
          <Button variantColor="primary" onClick={() => onRegistryClose()}>
            Sign In
          </Button>
        ) : (
          <Button variantColor="primary" onClick={() => onRegistryClose()}>
            Create Account
          </Button>
        )}
      </Flex>
    </Box>
  );
};

const SignIn = ({ message }: { message: string }) => {
  return (
    <>
      <Text margin="10px 0" color="#d3d3d3" fontWeight="bold">
        {message}
      </Text>
      <Box width="80%">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="email" color="gray.300" />} />
            <Input type="text" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="lock" color="gray.300" />} />
            <Input type="password" placeholder="Password" />
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
};

const CreateAccount = ({ message }: { message: string }) => {
  return (
    <>
      <Text margin="10px 0" color="#d3d3d3" fontWeight="bold">
        {message}
      </Text>
      <Box width="80%">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="email" color="gray.300" />} />
            <Input type="text" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="lock" color="gray.300" />} />
            <Input type="password" placeholder="Password" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="lock" color="gray.300" />} />
            <Input type="password" placeholder="Confirm Password" />
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
};

export default Registry;
