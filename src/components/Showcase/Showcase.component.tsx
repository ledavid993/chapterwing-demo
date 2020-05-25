import { Box, Grid, Skeleton } from "@chakra-ui/core";
import { isEmpty } from "ramda";
import styles from "./Showcase.module.scss";

const props = {
  title: "Popular Releases",
  novels: [],
};

interface Props {
  style?: any;
}

const Showcase: React.FC<Props> = ({ style }) => {
  return (
    <>
      {!isEmpty(props.novels) ? (
        <Box minHeight="200px" backgroundColor="#c4c4c410" style={style}>
          <div className={styles.heading}>
            <img src="/icons/feather.png" />
            <span>{props.title}</span>
          </div>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            padding="10x"
            textAlign="center"
          >
            {props.novels.map((e) => (
              <Box
                w="100%"
                maxWidth="80px"
                h="110px"
                bg="blue.500"
                margin="0 auto"
                borderRadius="5px"
              />
            ))}
          </Grid>
        </Box>
      ) : (
        <ShowcaseSkeleton style={style} />
      )}
    </>
  );
};

const ShowcaseSkeleton = ({ style }) => {
  const skeletonGrid = () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(
        <Skeleton
          key={i}
          w="100%"
          maxWidth="80px"
          h="115px"
          my="10px"
          bg="blue.500"
          margin="0 auto"
          borderRadius="5px"
        />
      );
    }
    return arr;
  };

  return (
    <Box minHeight="200px" backgroundColor="#c4c4c410" style={style}>
      <div className={styles.heading}>
        <img src="/icons/feather.png" />
        <span>{props.title}</span>
      </div>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        padding="10px"
        textAlign="center"
      >
        {skeletonGrid()}
      </Grid>
    </Box>
  );
};

export default Showcase;
