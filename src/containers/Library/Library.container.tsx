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
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const { novel } = useSelector((state: any) => state);
  const { library, loading }: NovelState = novel;
  const { count, results } = library;
  const router: NextRouter = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNovels({ offset, limit }));
  }, [router]);

  const onNavigateToNovelPage = (novelTitle: string) => {
    navigateToNovelPage(router, '/novels', novelTitle);
  };

  const searchNovel = () => {
    if (search.length === 0) dispatch(fetchNovels({ offset, limit }));
    else if (search.length < 3) {
      setMessage('Please enter at least three letters');
      return;
    } else dispatch(fetchNovels({ offset, limit, search }));
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
            <Input
              type="text"
              placeholder="Search Book"
              focusBorderColor="primary.500"
              onChange={({ target: { value } }: any) => {
                if (message) {
                  setMessage('');
                }
                setSearch(value);
              }}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  searchNovel();
                }
              }}
            />
          </InputGroup>
        </Stack>
        <Text
          background="#84B7C7"
          padding="0px 20px"
          borderRadius="5px"
          color="#fff"
          fontSize="13px"
          fontWeight="bold"
        >
          {message}
        </Text>
        {!loading ? (
          results.length !== 0 ? (
            results.map((novel: any) => (
              <div onClick={() => onNavigateToNovelPage(novel.title)}>
                <NovelList novel={novel} />
              </div>
            ))
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
