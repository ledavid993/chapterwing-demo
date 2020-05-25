import { useDisclosure, Box, Text } from "@chakra-ui/core";
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
