import { Box, Text, Textarea, Flex, Button } from '@chakra-ui/core';
import { StarRating } from '..';
import styles from './Review.module.scss';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface Props {
  onReviewSubmit: (
    text: string,
    rating: number
  ) => Promise<{ success: boolean; statusCode?: number }>;
}

const PostReview: React.FC<Props> = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [showPost, toggleShowPost] = useState({
    show: true,
    success: false,
    message: '',
  });

  const onChange = (value: number) => {
    setRating(value);
  };

  const onSubmit = async () => {
    if (text.trim().length < 100 || text.trim().length > 1000) return;
    const { success, statusCode } = await onReviewSubmit(text, rating);

    if (statusCode === 409) {
      toggleShowPost({
        show: false,
        success: true,
        message: 'You have already reviewed this novel',
      });
    } else if (statusCode) {
      alert(statusCode);
      return;
    } else {
      toggleShowPost({
        success,
        show: !success,
        message: 'Thank you for your review.',
      });
    }
  };

  return (
    <Box
      className={styles.postReviewContainer}
      display="flex"
      fontSize="14px"
      background="#d3d3d3"
      padding="5px 12px"
      borderRadius="2px"
      flexDirection="column"
    >
      <Flex justifyContent="space-between" alignItems="center" margin="5px 0">
        <Text fontWeight="bold" color="rgba(0,0,0,.7)">
          Rate this novel
        </Text>
        <Flex>
          {!showPost.success ? (
            <>
              {rating > 0 && (
                <Text color="rgba(0,0,0,.4)" fontWeight="bold" paddingRight="5px" paddingTop="3px">
                  {rating}
                </Text>
              )}
              <StarRating
                size={14}
                isHalf={false}
                className={styles.starRating}
                primaryColor="#84B7C7"
                onChange={onChange}
                isEdit={!showPost.success}
                value={rating}
              />
            </>
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <FaCheck size="1.2em" color="#00ff00" />
              <Text paddingLeft="8px" fontWeight="bold" color="rgba(0,0,0,.7)">
                {showPost.message}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      {rating > 0 && showPost.show && (
        <Box>
          <Textarea
            placeholder="Enter Review Here"
            resize="none"
            minHeight="150px"
            paddingBottom="5px"
            value={text}
            onChange={({ target: { value } }: any) => setText(value)}
          />
          <Flex w="100%" justifyContent="space-between" marginTop="8px">
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontWeight="bold"
              fontSize="11px"
              color="rgba(0,0,0,.4)"
            >
              <span
                className={clsx(
                  (text.trim().length < 100 || text.trim().length > 1000) && styles['error'],
                  !(text.trim().length < 100 || text.trim().length > 1000) && styles['ok']
                )}
              >
                minimum of 100 characters & maximum of 1000 characters ({text.trim().length})
              </span>
            </Text>
            <Button size="sm" variantColor="primary" onClick={() => onSubmit()}>
              Submit
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default PostReview;
