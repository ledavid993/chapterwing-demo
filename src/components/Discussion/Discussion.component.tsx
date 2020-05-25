import { Box, Text, Skeleton } from "@chakra-ui/core";
import { ellipsisString } from "../../utils";
import styles from "./Discussion.module.scss";

const string =
  "Hurricane Fred was the easternmost Atlantic hurricane ever to form in the tropics, and the first to move through Cape Verde since 1892. The second hurricane of the 2015 Atlantic hurricane season, Fred became a Category 1 hurricane on August 31 as it approached Cape Verde, which was placed under a hurricane warning for the first time ever. The Barlavento Islands endured gales and flooding rains as the eye of the hurricane paralleled their shorelines. Structural damage across Boa Vista and Sal presented as leveled roofs, damaged homes and toppled utility poles. Farmers on São Nicolau suffered crop and livestock losses when they saw their lands flood. Fred's rains, though destructive, alleviated a drought across the Sotavento Islands of Cape Verde. Elsewhere, violent seas along the West African shoreline destroyed fishing villages and submerged homes in Senegal. Between the coasts of West Africa and Cape Verde, nine people died in maritime incidents.";

interface Props {
  title: string;
  content: string;
  likes: number;
}

const Discussion: React.FC<Props> = ({ title, content, likes }) => {
  return (
    <>
      {
        <div className={styles.container}>
          <div className={styles.number}>{likes}</div>
          <div className={styles.content}>
            <h4>{ellipsisString(50, title)}</h4>
            <p>{ellipsisString(150, content)}</p>
          </div>
        </div>
      }
    </>
  );
};

export const DiscussionSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.number}></Skeleton>
      <div className={styles.content} style={{ width: "100%" }}>
        <h4>
          <Skeleton marginBottom="5px">Title</Skeleton>
        </h4>
        <p>
          <Skeleton w="100%" h="15px" />
        </p>
      </div>
    </div>
  );
};

export default Discussion;
