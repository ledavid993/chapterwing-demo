import { useDisclosure, Box, Text } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import MenuBar from '../MenuBar/MenuBar.component';
import SideBar from '../SideBar/SideBar.component';
import Backdrop from '../Backdrop/Backdrop';
import Registry from '../Registry/Registry.component';
import { signIn, validateToken, createAccount, signOut } from '../../redux/actions/auth.action';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SettingBox from '../SettingBox/SettingBox.component';

export default function Layout({ children }: any) {
  const { isOpen: isMenuBarOpen, onOpen: onMenuBarOpen, onClose: onMenuBarClose } = useDisclosure();
  const dispatch = useDispatch();
  const { pending, user, errors } = useSelector(({ auth }: any) => auth);

  const {
    isOpen: isRegistryOpen,
    onOpen: onRegistryOpen,
    onClose: onRegistryClose,
  } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    dispatch(validateToken());
  }, [router]);

  const onSignIn = async (email: string, password: string) => {
    const isSuccess = await dispatch(signIn(email, password));
    if (isSuccess && !pending) {
      onRegistryClose();
    }
  };

  const onSignOut = async () => {
    dispatch(signOut());
    onRegistryClose();
  };

  const onRegister = async (email: string, username: string, password: string) => {
    return await dispatch(createAccount(email, username, password));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Read, write, and share novels. From indie novels to web novels. Chapterwing is a
           place for writers to share with readers and readers to discuss their favorite book"
        />
        <script
          data-ad-client="ca-pub-6339212630902854"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <MenuBar
        onMenuBarOpen={onMenuBarOpen}
        onRegistryOpen={onRegistryOpen}
        isRegistryOpen={isRegistryOpen}
        user={user}
        onRegistryClose={onRegistryClose}
      />
      <Backdrop onClose={onMenuBarClose} isOpen={isMenuBarOpen} />
      <SideBar isOpen={isMenuBarOpen} />
      <Registry
        isOpen={isRegistryOpen && !user}
        onRegistryClose={onRegistryClose}
        onSignIn={onSignIn}
        pending={pending}
        onRegister={onRegister}
        errors={errors}
      />
      <SettingBox
        isOpen={isRegistryOpen && user}
        onRegistryClose={onRegistryClose}
        onSignOut={onSignOut}
        user={user}
      />
      {children}
      <Box
        backgroundColor="#c4c4c420"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px;"
        position="absolute"
        width="100%"
        bottom="-70px"
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
