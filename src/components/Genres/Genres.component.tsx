import { Badge, Box } from '@chakra-ui/core';
import { isNil } from 'ramda';

interface Props {
  genres: string[] | null;
}

const Genres: React.FC<Props> = ({ genres }) => {
  return (
    <Box margin="35px 0">
      {' '}
      {!isNil(genres) && genres.map((genre) => <Genre key={genre}>{genre}</Genre>)}
    </Box>
  );
};

const Genre = ({ children }: any) => {
  return (
    <Badge
      variantColor="primary"
      variant="solid"
      fontSize=".7em"
      padding="5px 7px"
      marginRight="8px"
      borderRadius="5px"
    >
      {children}
    </Badge>
  );
};

export default Genres;
