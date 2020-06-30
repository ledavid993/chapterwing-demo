import { Box, Flex, Text } from '@chakra-ui/core';
import { TiMessages } from 'react-icons/ti';
import dayjs from 'dayjs';
import ReactStarsRating from 'react-awesome-stars-rating';
import { ReviewEntity } from '@interface/novel.interface';
import styles from './Review.module.scss';
import { StarRating } from '..';

interface Props {
  reviews: ReviewEntity[];
}

const Review: React.FC<Props> = ({ reviews }) => {
  return (
    <Box margin="10px 0">
      {reviews.length !== 0 ? (
        reviews.map((review) => <ReviewBox review={review} />)
      ) : (
        <ReviewEmpty />
      )}
    </Box>
  );
};

const ReviewBox = ({ review }: { review: ReviewEntity }) => {
  return (
    <Box
      width="100%"
      background="rgba(177,177,177,.5)"
      key={review.id}
      margin="5px 0"
      borderRadius="5px"
      className={styles.reviewBoxContainer}
    >
      <Flex padding="10px" className={styles.reviewBoxInnerContainer}>
        <Box padding="5px" className={styles.header}>
          <Text>{review.username || 'Anonymous'}</Text>
          <Text display="flex" justifyContent="flex-end">
            {dayjs(review.createdDate).format('MMMM DD, YYYY')}
          </Text>
          <Text></Text>
          <Text display="flex" justifyContent="flex-end" alignItems="center">
            <StarRating
              value={review.rating}
              size={14}
              className={styles.starRating}
              isEdit={false}
              primaryColor="#84B7C7"
            />
            <Text paddingLeft="10px" color="#d3d3d3" fontWeight="normal" fontSize="15px">
              {review.rating}
            </Text>
          </Text>
        </Box>
        <Box>
          <Text>{review.text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

const ReviewEmpty = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        background="#84b7c7"
        borderRadius="50%"
        display="inline-block"
        padding="20px"
        border="7px solid #0f4759"
      >
        <TiMessages size="7em" color="white" />
      </Box>
      <Text color="#d3d3d3" fontWeight="bold" margin="16px 0">
        Nobody has posted a review yet
      </Text>
    </Flex>
  );
};

export default Review;
