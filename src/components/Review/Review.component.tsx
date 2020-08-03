import { Box, Flex, Text, Button, Spinner } from '@chakra-ui/core';
import { TiMessages } from 'react-icons/ti';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { ReviewEntity } from '@interface/novel.interface';
import styles from './Review.module.scss';
import { StarRating } from '..';
import PostReview from './PostReview';

interface Props {
  reviews: ReviewEntity[];
  count: number;
  onReviewSubmit: (
    text: string,
    rating: number
  ) => Promise<{ success: boolean; statusCode?: number }>;
  isAuth: boolean;
  loading: boolean;
  showMoreReviews: () => void;
}

const Review: React.FC<Props> = ({
  reviews,
  count,
  onReviewSubmit,
  isAuth,
  loading,
  showMoreReviews,
}) => {
  return (
    <Box margin="10px 0" width="100%">
      {reviews.length !== 0 ? (
        reviews.map((review) => <ReviewBox review={review} key={review.id} />)
      ) : (
        <ReviewEmpty />
      )}
      <Flex justifyContent="center" marginTop="10px">
        {reviews.length + 1 < count ? (
          <>
            {!loading ? (
              <Button
                fontSize="12px"
                w="80%"
                variantColor="primary"
                onClick={() => showMoreReviews()}
              >
                Show More
              </Button>
            ) : (
              <Flex justifyContent="center" alignItems="center">
                <Spinner size="lg" />
              </Flex>
            )}
          </>
        ) : null}
      </Flex>
      {isAuth && <PostReview onReviewSubmit={onReviewSubmit} />}
    </Box>
  );
};

const ReviewBox = ({ review }: { review: ReviewEntity }) => {
  const [height, toggleHeightChange] = useState({
    isMinimize: true,
    length: '50px',
  });

  const onHeightChange = () => {
    if (height.isMinimize) {
      toggleHeightChange({
        isMinimize: false,
        length: 'auto',
      });
    } else {
      toggleHeightChange({
        isMinimize: true,
        length: '10px',
      });
    }
  };

  return (
    <Box
      margin="5px 0"
      borderRadius="5px"
      className={styles.reviewBoxContainer}
      onClick={() => onHeightChange()}
    >
      <Flex padding="10px" className={styles.reviewBoxInnerContainer}>
        <Box padding="5px" className={styles.header}>
          <Text>{review.username || 'Anonymous'}</Text>
          <Text display="flex" justifyContent="flex-end">
            {dayjs(review.createdDate).format('MMMM DD, YYYY')}
          </Text>
          <Text></Text>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <StarRating
              value={review.rating}
              size={14}
              className={styles.starRating}
              isEdit={false}
              primaryColor="#84B7C7"
            />
            <Text paddingLeft="5px" paddingTop="2px" color="#d3d3d3" fontWeight="normal">
              {review.rating}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text
            color="#d3d3d3"
            padding="10px"
            borderRadius="5px"
            whiteSpace="pre-line"
            height={height.length}
            overflow="auto"
            border="1px solid rgba(122,122,122,.1)"
          >
            {review.text}
          </Text>
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
