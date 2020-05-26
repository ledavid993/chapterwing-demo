import { Box, Image } from "@chakra-ui/core";
import { Layout } from "../../components";
import styles from "./Novel.module.scss";

export default function Novel() {
  return (
    <Layout>
      <Box h="325px" w="100%" position="relative">
        <div className={styles.shade} />
        <Image src="/wood.jpg" h="100%" w="100%" />
        <div className={styles.stack}>
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper}>
            <Image
              src="https://cdn.novelupdates.com/images/2019/01/The-Second-Coming-of-Avarice.jpg"
              h="100%"
              w="100%"
              borderColor="background.300"
            />
          </div>
        </div>
      </Box>
    </Layout>
  );
}
