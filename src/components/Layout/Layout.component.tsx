import { useDisclosure, Box, Text } from "@chakra-ui/core";
import Head from "next/head";
import MenuBar from "../MenuBar/MenuBar.component";
import SideBar from "../SideBar/SideBar.component";
import Backdrop from "../Backdrop/Backdrop";

export default function Layout({ children }) {
  const {
    isOpen: isMenuBarOpen,
    onOpen: onMenuBarOpen,
    onClose: onMenuBarClose,
  } = useDisclosure();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Chapterwing - Homepage"
          content="Read, write, and share novels. From indie novels to web novels. Chapterwing is a
           place for writers to share with readers and readers to discuss their favorite book"
        />
      </Head>
      <MenuBar onMenuBarOpen={onMenuBarOpen} />
      <Backdrop onClose={onMenuBarClose} isOpen={isMenuBarOpen} />
      <SideBar isOpen={isMenuBarOpen} />
      {children}
      <Box
        backgroundColor="#c4c4c420"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px;"
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
