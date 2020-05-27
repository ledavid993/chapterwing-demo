import styles from './Backdrop.module.scss';
import clsx from 'clsx';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Backdrop = ({ onClose, isOpen }: any) => {
  return <div className={clsx(isOpen && styles.backDrop)} onClick={() => onClose()} />;
};

export default Backdrop;
