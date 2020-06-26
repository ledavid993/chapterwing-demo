import styles from './SettingBox.module.scss';
import clsx from 'clsx';
import { Button, Flex } from '@chakra-ui/core';

interface Props {
  isOpen: boolean;
  onRegistryClose: () => void;
  onSignOut: () => void;
}

const SettingBox: React.FC<Props> = ({ isOpen, onRegistryClose, onSignOut }) => {
  return (
    <>
      <div className={clsx(styles.container, !isOpen && styles.none)}>
        <div className={styles.arrow} />

        <Flex justifyContent="center" alignItems="center" marginTop="5px" padding="10px">
          <Button onClick={() => onSignOut()}>Sign Out</Button>
        </Flex>
      </div>
      <div
        className={clsx(styles.backdrop, !isOpen && styles.none)}
        onClick={() => onRegistryClose()}
      />
    </>
  );
};

export default SettingBox;
