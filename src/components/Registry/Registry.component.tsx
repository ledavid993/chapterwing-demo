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
  List,
  ListItem,
} from '@chakra-ui/core';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './Registry.module.scss';
import { useEffect, useState } from 'react';
import { isNil, isEmpty } from 'ramda';
import { clearAuthError } from '@redux/actions/auth.action';

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onRegister: (email: string, username: string, password: string) => void;
  pending: boolean;
  errors: string[];
}

const Registry: React.FC<Props> = ({
  isOpen,
  onRegistryClose,
  onSignIn,
  pending,
  onRegister,
  errors,
}) => {
  const [isSignIn, toggleSignIn] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const dispatch = useDispatch();

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
    dispatch(clearAuthError());
  };

  const onRegisterSubmit = () => {
    setConfirmPasswordError('');
    if (inputs.password !== inputs.confirmPassword) {
      setConfirmPasswordError('Passwords does not match');
    } else {
      onRegister(inputs.email, inputs.username, inputs.password);
    }
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
          <CreateAccount message="New? Please Create an Account." onInputChange={onInputChange} />
        )}
      </Box>
      <List
        margin="5px 0"
        styleType="disc"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        {!isNil(errors) && !isEmpty(errors)
          ? errors.map((error) => (
              <ListItem color="#cc0000" fontSize="12px" whiteSpace="pre-wrap">
                {error}
              </ListItem>
            ))
          : null}
      </List>

      {!isEmpty(confirmPasswordError) && (
        <List
          margin="5px 0"
          styleType="disc"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <ListItem color="#cc0000" fontSize="12px" whiteSpace="pre-wrap">
            {confirmPasswordError}
          </ListItem>
        </List>
      )}

      <Flex justifyContent="space-around" className={styles.buttons}>
        <Button onClick={() => onRegistryClose()}>Cancel</Button>
        {isSignIn ? (
          <Button variantColor="primary" onClick={() => onSignIn(inputs.email, inputs.password)}>
            {pending ? <Spinner /> : 'Sign In'}
          </Button>
        ) : (
          <Button variantColor="primary" onClick={() => onRegisterSubmit()}>
            {pending ? <Spinner /> : 'Create Account'}
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
            <InputLeftElement fontSize="1.2em" children={<Icon name="email" color="gray.300" />} />
            <Input
              type="text"
              placeholder="Username"
              name="username"
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
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={({ target: { value, name } }: any) => onInputChange(name, value)}
            />
          </InputGroup>
        </Stack>
      </Box>
    </>
  );
};

export default Registry;
