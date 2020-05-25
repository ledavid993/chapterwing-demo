import styles from "./Header.module.scss";
import { Heading } from "@chakra-ui/core";

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <Heading size="md" className={styles.container}>
      {name}
      <div />
    </Heading>
  );
};

export default Header;
