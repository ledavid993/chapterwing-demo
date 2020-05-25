import styles from "./MenuBar.module.scss";
import { MdMenu } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { Box } from "@chakra-ui/core";

interface Props {
  onMenuBarOpen: () => void;
}

const MenuBar: React.FC<Props> = ({ onMenuBarOpen }) => {
  return (
    <Box className={styles.container} backgroundColor="primary.300">
      <div>
        <MdMenu color="white" onClick={() => onMenuBarOpen()} />
        <div>ChapterWing</div>
      </div>
      <IoMdLogIn color="white" />
    </Box>
  );
};

export default MenuBar;
