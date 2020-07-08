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
import { useDispatch, useSelector } from 'react-redux';
import styles from './Registry.module.scss';
import { useEffect, useState } from 'react';
import { isNil, isEmpty } from 'ramda';
import { clearAuthError, forgotPassword } from '@redux/actions/auth.action';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const initialInput = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onRegister: (
    email: string,
    username: string,
    password: string
  ) => Promise<{ statusCode: number }>;
  onForgotPassword: (email: string) => Promise<{ statusCode: number }>;
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
  onForgotPassword,
}) => {
  const [isSignIn, toggleSignIn] = useState(true);
  const [isCreateAccount, toggleCreateAccount] = useState(false);
  const [isForgotPassword, toggleForgotPassword] = useState(false);
  const [inputs, setInputs] = useState(initialInput);
  const [inputErrors, setInputErrors] = useState(initialInput);
  const [showSuccessRegister, toggleShowSuccessRegister] = useState(null);
  const [showForgotPasswordSuccess, toggleForgotPasswordSuccess] = useState(null);
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
    toggleCreateAccount(!isCreateAccount);
    dispatch(clearAuthError());
  };

  const onClose = () => {
    toggleSignIn(true);
    toggleCreateAccount(false);
    toggleForgotPassword(false);
    toggleShowSuccessRegister(null);
    toggleForgotPasswordSuccess(null);
    setInputErrors(initialInput);
    setInputs(initialInput);
    dispatch(clearAuthError());
    onRegistryClose();
  };

  const onRegisterSubmit = async () => {
    setInputErrors({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    if (inputs.password !== inputs.confirmPassword) {
      setInputErrors({
        ...inputErrors,
        confirmPassword: 'Passwords does not match',
      });
    } else {
      const { statusCode } = await onRegister(inputs.email, inputs.username, inputs.password);

      if (statusCode === 201) {
        toggleShowSuccessRegister(true);
        onClose();
      } else if (statusCode >= 400) {
        toggleShowSuccessRegister(false);
      } else {
        toggleShowSuccessRegister(null);
      }
    }
  };

  const onForgotPasswordSubmit = async () => {
    if (inputs.email.length === 0) {
      setInputErrors({
        email: 'Email cannot be empty',
        username: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      setInputErrors(initialInput);
      const { statusCode } = await onForgotPassword(inputs.email);
      if (statusCode === 201) {
        toggleForgotPasswordSuccess(true);
        setInputErrors(initialInput);
        setInputs(initialInput);
        dispatch(clearAuthError());
      } else if (statusCode >= 400) {
        toggleForgotPasswordSuccess(false);
      } else {
        toggleForgotPasswordSuccess(null);
      }
    }
  };

  return (
    <Box className={clsx(styles.container, !isOpen && styles.hide)}>
      <Flex justifyContent="space-around">
        <Box className={clsx(styles.head, isSignIn && styles.active)} onClick={() => onClick()}>
          SIGN IN
          {isSignIn && <Box className={styles.lineSign} backgroundColor="primary.300" />}
        </Box>
        <Box
          className={clsx(styles.head, isCreateAccount && styles.active)}
          onClick={() => onClick()}
        >
          CREATE ACCOUNT
          {isCreateAccount && <Box className={styles.lineCreate} backgroundColor="primary.300" />}
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
        {isSignIn && <SignIn message=" Welcome, Please Sign in!" onInputChange={onInputChange} />}
        {isCreateAccount && (
          <CreateAccount
            message="New? Please Create an Account."
            onInputChange={onInputChange}
            showSuccessRegister={showSuccessRegister}
          />
        )}
        {isForgotPassword && (
          <ForgotPassword
            message="Forgot your password? No Problem"
            onInputChange={onInputChange}
            showForgotPasswordSuccess={showForgotPasswordSuccess}
          />
        )}
      </Box>

      <Box margin="5px 0">
        {!isNil(errors) && !isEmpty(errors)
          ? errors.map((error) => <ErrorMessage>{error}</ErrorMessage>)
          : null}
        {!isEmpty(inputErrors.confirmPassword) && (
          <ErrorMessage>{inputErrors.confirmPassword}</ErrorMessage>
        )}
        {!isEmpty(inputErrors.email) && <ErrorMessage>{inputErrors.email}</ErrorMessage>}
        {!isEmpty(inputErrors.password) && <ErrorMessage>{inputErrors.password}</ErrorMessage>}
        {!isEmpty(inputErrors.username) && <ErrorMessage>{inputErrors.username}</ErrorMessage>}
      </Box>
      <Flex justifyContent="space-around" className={styles.buttons}>
        <Button onClick={() => onClose()}>Cancel</Button>
        {isSignIn && (
          <Button variantColor="primary" onClick={() => onSignIn(inputs.email, inputs.password)}>
            {pending ? <Spinner /> : 'Sign In'}
          </Button>
        )}
        {isCreateAccount && (
          <Button variantColor="primary" onClick={() => onRegisterSubmit()}>
            {pending ? <Spinner /> : 'Create Account'}
          </Button>
        )}
        {isForgotPassword && (
          <Button variantColor="primary" onClick={() => onForgotPasswordSubmit()}>
            {pending ? <Spinner /> : 'Send Reset Password'}
          </Button>
        )}
      </Flex>
      {isSignIn && (
        <Flex justifyContent="center" marginTop="20px">
          <Button
            variant="outline"
            variantColor="primary"
            onClick={() => {
              {
                toggleForgotPassword(!isForgotPassword);
                toggleSignIn(!isSignIn);
                setInputErrors(initialInput);
                setInputs(initialInput);
                dispatch(clearAuthError());
              }
            }}
          >
            Forgot password
          </Button>
        </Flex>
      )}
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
  showSuccessRegister,
}: {
  message: string;
  onInputChange: (name: string, value: string) => void;
  showSuccessRegister: boolean;
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
        {showSuccessRegister !== null &&
          (showSuccessRegister && showSuccessRegister ? (
            <Box className={styles.email} background="#1baf13">
              Email Sent
            </Box>
          ) : (
            <Box className={styles.email} background="#FF0000">
              Server busy, please try again at a later time.
            </Box>
          ))}
      </Box>
    </>
  );
};

const ForgotPassword = ({
  message,
  onInputChange,
  showForgotPasswordSuccess,
}: {
  showForgotPasswordSuccess: boolean;
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
        </Stack>
        {showForgotPasswordSuccess !== null &&
          (showForgotPasswordSuccess && showForgotPasswordSuccess ? (
            <Box className={styles.email} background="#1baf13">
              Email Sent
            </Box>
          ) : (
            <Box className={styles.email} background="#FF0000">
              Something went wrong, please try again.
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Registry;
