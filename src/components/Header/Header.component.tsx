import styles from "./Header.module.scss";
import { Heading } from "@chakra-ui/core";

interface Props {
  fontSize?: string;
}

const Header: React.FC<Props> = ({ children, fontSize = "12px" }) => {
  return (
    <Heading fontSize={fontSize} className={styles.container}>
      {children}
      <div />
    </Heading>
  );
};

export default Header;
