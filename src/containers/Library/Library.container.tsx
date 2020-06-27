import {
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Box,
  Text,
  Spinner,
  Flex,
} from '@chakra-ui/core';
import { Layout, NovelList } from '@components';
import { navigateToNovelPage } from '@utils/navigate';
import { useRouter, NextRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { NovelState } from '@interface/novel.interface';
import { useEffect, useState } from 'react';
import { fetchNovels } from '@redux/actions/novel.action';

const Library = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const { novel } = useSelector((state: any) => state);
  const { library, loading }: NovelState = novel;
  const { count, results } = library;
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNovels(offset, limit));
  }, [router]);

  const onNavigateToNovelPage = (novelTitle: string) => {
    navigateToNovelPage(router, '/novels', novelTitle);
  };

  return (
    <Layout>
      <Box
        width={['90%', '90%', '70%']}
        margin="0 auto"
        background="rgba(127, 127, 127, 0.129)"
        padding="25px 15px"
      >
        <Stack margin="10px 0">
          <InputGroup>
            <InputLeftElement children={<Icon name="search" color="gray.300" />} />
            <Input type="search" placeholder="Search Book" focusBorderColor="primary.500" />
          </InputGroup>
        </Stack>
        {!loading ? (
          results.length !== 0 ? (
            results.map((novel: any) => <NovelList novel={novel} />)
          ) : (
            <Text
              display="flex"
              color="#d3d3d3"
              justifyContent="center"
              fontWeight="bold"
              alignItems="center"
              marginTop="25px"
            >
              No Results Found
            </Text>
          )
        ) : (
          <Flex justifyContent="center" alignItems="center">
            <Spinner />
          </Flex>
        )}
      </Box>
    </Layout>
  );
};

export default Library;
