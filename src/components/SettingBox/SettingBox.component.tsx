import styles from './SettingBox.module.scss';
import clsx from 'clsx';
import { Button, Flex, Text } from '@chakra-ui/core';

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
  onSignOut: () => void;
  user: any;
}

const SettingBox: React.FC<Props> = ({ isOpen, onRegistryClose, onSignOut, user }) => {
  return (
    <>
      <div className={clsx(styles.container, !isOpen && styles.none)}>
        <div className={styles.arrow} />

        <Flex
          justifyContent="center"
          alignItems="center"
          marginTop="5px"
          padding="10px"
          flexDirection="column"
        >
          <Text fontWeight="bold" margin="5px 0">
            Welcome
          </Text>
          <Text margin="5px 0">{user.email}</Text>
          <Button onClick={() => onSignOut()} margin="5px 0">
            Sign Out
          </Button>
        </Flex>
      </div>
      {/* <div
        className={clsx(styles.backdrop, !isOpen && styles.none)}
        onClick={() => onRegistryClose()}
      /> */}
    </>
  );
};

export default SettingBox;
