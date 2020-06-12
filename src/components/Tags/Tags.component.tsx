import { Badge } from '@chakra-ui/core';
import { isNil } from 'ramda';

interface Props {
  tags: string[] | null;
}

const Tags: React.FC<Props> = ({ tags }) => {
  return <div>{!isNil(tags) && tags.map((tag) => <Tag>{tag}</Tag>)}</div>;
};

const Tag = ({ children }: any) => {
  return (
    <Badge variant="outline" fontSize=".7em" padding="2px 5px" marginRight="8px" borderRadius="5px">
      {children}
    </Badge>
  );
};

export default Tags;
