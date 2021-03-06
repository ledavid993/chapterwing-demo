import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { Box } from '@chakra-ui/core';
import styles from './MenuBar.module.scss';

interface Props {
  onMenuBarOpen: () => void;
  onRegistryOpen: () => void;
  onRegistryClose: () => void;
  isRegistryOpen: boolean;
  user: any;
}

const MenuBar: React.FC<Props> = ({
  onMenuBarOpen,
  onRegistryOpen,
  user,
  onRegistryClose,
  isRegistryOpen,
}) => {
  const onLogOutClick = () => {
    if (isRegistryOpen) {
      onRegistryClose();
    } else {
      onRegistryOpen();
    }
  };
  return (
    <Box className={styles.container} backgroundColor="primary.300">
      <div>
        <MdMenu color="white" onClick={() => onMenuBarOpen()} className={styles.object} />
        <Link as="/" href="/">
          <div className={styles.object}>ChapterWing</div>
        </Link>
      </div>
      {user ? (
        <IoMdLogOut color="white" onClick={() => onLogOutClick()} className={styles.object} />
      ) : (
        <IoMdLogIn color="white" onClick={() => onRegistryOpen()} className={styles.object} />
      )}
    </Box>
  );
};

export default MenuBar;
