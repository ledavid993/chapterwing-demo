import { useDisclosure, Box, Text } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import MenuBar from '../MenuBar/MenuBar.component';
import SideBar from '../SideBar/SideBar.component';
import Backdrop from '../Backdrop/Backdrop';
import Registry from '../Registry/Registry.component';
import { signIn, validateToken } from '../../redux/actions/auth.action';
import { useEffect } from 'react';

export default function Layout({ children }: any) {
  const { isOpen: isMenuBarOpen, onOpen: onMenuBarOpen, onClose: onMenuBarClose } = useDisclosure();
  const dispatch = useDispatch();
  const { pending, auth } = useSelector(({ auth }: any) => auth);

  const {
    isOpen: isRegistryOpen,
    onOpen: onRegistryOpen,
    onClose: onRegistryClose,
  } = useDisclosure();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(validateToken());
    }
  }, []);

  const onSignIn = async (email: string, password: string) => {
    const isSuccess = await dispatch(signIn(email, password));
    if (isSuccess && !pending) {
      onRegistryClose();
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Read, write, and share novels. From indie novels to web novels. Chapterwing is a
           place for writers to share with readers and readers to discuss their favorite book"
        />
      </Head>
      <MenuBar onMenuBarOpen={onMenuBarOpen} onRegistryOpen={onRegistryOpen} auth={auth} />
      <Backdrop onClose={onMenuBarClose} isOpen={isMenuBarOpen} />
      <SideBar isOpen={isMenuBarOpen} />
      <Registry
        isOpen={isRegistryOpen}
        onRegistryClose={onRegistryClose}
        onSignIn={onSignIn}
        pending={pending}
      />
      {children}
      <Box
        backgroundColor="#c4c4c420"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px;"
        position="relative"
        bottom="0"
      >
        <Text fontSize="14px" color="white">
          chapterwing.@gmail.com
        </Text>
        <Text fontSize="12px" color="#909090">
          Copyright © 2020 ChapterWing. All rights reserved.
        </Text>
      </Box>
    </div>
  );
}
