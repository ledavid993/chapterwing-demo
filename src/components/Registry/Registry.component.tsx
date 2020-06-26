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
  Spinner,
} from '@chakra-ui/core';
import clsx from 'clsx';
import styles from './Registry.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
  onSignIn: (email: string, password: string) => void;
  pending: boolean;
}

const Registry: React.FC<Props> = ({ isOpen, onRegistryClose, onSignIn, pending }) => {
  const [isSignIn, toggleSignIn] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const onInputChange = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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
          <SignIn message=" Welcome, Please Sign in!" onInputChange={onInputChange} />
        ) : (
          <CreateAccount message="New? Please Create Around." onInputChange={onInputChange} />
        )}
      </Box>
      <Flex justifyContent="space-around" marginTop="30px" className={styles.buttons}>
        <Button onClick={() => onRegistryClose()}>Cancel</Button>
        {isSignIn ? (
          <Button variantColor="primary" onClick={() => onSignIn(inputs.email, inputs.password)}>
            {pending ? <Spinner /> : 'Sign In'}
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

const SignIn = ({
  message,
  onInputChange,
}: {
  message: string;
  onInputChange: (name: string, value: string) => void;
}) => {
  return (
    <>
      <Text margin="10px 0" color="#d3d3d3" fontWeight="bold">
        {message}
      </Text>
      <Box className={styles.inputField}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="email" color="gray.300" />} />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              onChange={({ target: { value, name } }: any) => onInputChange(name, value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="lock" color="gray.300" />} />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={({ target: { value, name } }: any) => onInputChange(name, value)}
            />
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
};

const CreateAccount = ({
  message,
  onInputChange,
}: {
  message: string;
  onInputChange: (name: string, value: string) => void;
}) => {
  return (
    <>
      <Text margin="10px 0" color="#d3d3d3" fontWeight="bold">
        {message}
      </Text>
      <Box width="80%">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="email" color="gray.300" />} />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              onChange={({ target: { value, name } }: any) => onInputChange(name, value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<Icon name="lock" color="gray.300" />} />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={({ target: { value, name } }: any) => onInputChange(name, value)}
            />
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
