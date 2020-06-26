import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { Box } from '@chakra-ui/core';
import styles from './MenuBar.module.scss';

interface Props {
  onMenuBarOpen: () => void;
  onRegistryOpen: () => void;
  auth: any;
}

const MenuBar: React.FC<Props> = ({ onMenuBarOpen, onRegistryOpen, auth }) => {
  return (
    <Box className={styles.container} backgroundColor="primary.300">
      <div>
        <MdMenu color="white" onClick={() => onMenuBarOpen()} />
        <Link as="/" href="/">
          <a>
            <div>ChapterWing</div>
          </a>
        </Link>
      </div>
      {auth ? (
        <IoMdLogOut color="white" onClick={() => onRegistryOpen()} />
      ) : (
        <IoMdLogIn color="white" onClick={() => onRegistryOpen()} />
      )}
    </Box>
  );
};

export default MenuBar;
