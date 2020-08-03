import {
  Box,
  Heading,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button,
  List,
  ListItem,
} from '@chakra-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Reset.module.scss';
import { resetPassword, clearAuthError } from '../../redux/actions/auth.action';
import { useRouter } from 'next/router';
import { isNil, isEmpty } from 'ramda';

const Reset = () => {
  const { auth } = useSelector((state: any) => state);
  const { errors } = auth;
  const [inputs, setInputs] = useState({
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('accessToken');
  }, []);

  const onInputChange = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitPassword = async () => {
    setPasswordError('');
    dispatch(clearAuthError());
    if (inputs.password.length === 0 || inputs.confirmPassword.length === 0) {
      setPasswordError('Password cannot be empty');
    } else if (inputs.password !== inputs.confirmPassword) {
      setPasswordError('Password do not match');
    } else {
      const { statusCode }: { statusCode: number } = await dispatch(
        resetPassword(router.query.accessToken as string, inputs.password)
      );
      if (statusCode === 200) {
        router.push('/');
      }
    }
  };

  return (
    <Box className={styles.inputField}>
      <Heading color="#d3d3d3" margin="20px 0">
        Reset Password
      </Heading>
      <Stack spacing={4}>
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
          ? errors.map((error: string) => (
              <ListItem color="#cc0000" fontSize="12px" whiteSpace="pre-wrap">
                {error}
              </ListItem>
            ))
          : null}
      </List>
      {!isEmpty(passwordError) && (
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
            {passwordError}
          </ListItem>
        </List>
      )}
      <Button variantColor="primary" marginTop="25px" onClick={() => onSubmitPassword()}>
        Submit
      </Button>
    </Box>
  );
};

export default Reset;
