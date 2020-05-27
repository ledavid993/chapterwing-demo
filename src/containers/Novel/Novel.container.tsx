import { Box, Image, Heading, Text, SimpleGrid, Divider, Flex } from '@chakra-ui/core';
import Head from 'next/head';
import { Layout, Header, Table, Review, Discussion } from '../../components';
import styles from './Novel.module.scss';

export default function Novel() {
  return (
    <Layout>
      <Head>
        <title>Second Coming </title>
      </Head>
      <Box h="325px" w="100%" position="relative">
        <div className={styles.shade} />
        <Image src="/wood.jpg" h="100%" w="100%" alt="background" />
        <div className={styles.stack}>
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper} />
          <div className={styles.paper}>
            <Image
              src="https://cdn.novelupdates.com/images/2019/01/The-Second-Coming-of-Avarice.jpg"
              h="100%"
              w="100%"
              borderRadius="5px"
              border="1px solid rgba(122,122,122)"
            />
          </div>
        </div>
      </Box>
      <Box padding="10px">
        <Heading size="md" color="#d3d3d3" margin="15px 0" textDecoration="underline">
          Second Coming of Gluttony
        </Heading>
        <Text marginTop="5%" whiteSpace="pre-line" color="white" fontSize="12px" lineHeight=".9rem">
          {`Space complexity time is not the only thing that matters in an algorithm. We might also care about the amount of memort - or space requried by an algorithm

                Space complexity is a parallel concept to time compleixty if we need to create an array of size n this weill requires o n space if we need a two dimensinal array of size n this will rqeuired n2 space

                Stack space in recurcives 

                Int sum int n
                If n 

                Drop the non-dominant terms 

                What do you do about an expression such as o n2 + n that second n isnt exacly a constant. But it is not especially important

                We already said that we drop constants therefore on2 

                Amortized time

                An array list or a dynamically resizeing array allows you to have the benefits of an array while oferring flexibilty in size

                You wont run out of space in the arraylust since its capacity will grow as you inser elements

                When the array list class will create a new array with doble the capacity and copy all the lement over to the new array

                The array could be full if the array container n elmenets, then insering a new elemnt will take on time
                `}
        </Text>
        <SimpleGrid
          columns={[2, 3]}
          spacing={5}
          padding="80px 2px"
          color="#d3d3d360"
          fontWeight="bold"
          fontSize="11px"
          className={styles.extraInfo}
        >
          <Box>
            Released <span className={styles.labelInfo}>March 20th, 2020</span>
          </Box>
          <Box>
            Language <span className={styles.labelInfo}>English</span>
          </Box>
          <Box>
            Genre <span className={styles.labelInfo}>Adventure, Fantasy</span>
          </Box>
          <Box>
            Author <span className={styles.labelInfo}>Seok-em</span>
          </Box>
          <Box>
            Public Rating <span className={styles.labelInfo}>4.1</span>
          </Box>
          <Box>
            Feathermeter <span className={styles.labelInfo}>---</span>
          </Box>
        </SimpleGrid>
        <Table name="Volume 1 - Demon Heart" />
        <Table name="Volume 2 - Red Heart" />
        <Divider w="90%" margin="30px auto" borderColor="background.300" />
        <Box>
          <Header fontSize="14px">Reviews</Header>
          <Review />
        </Box>
        <Box>
          <Header fontSize="14px">Discussions</Header>
          <Discussion title="" content="" likes={0} />
        </Box>
      </Box>
    </Layout>
  );
}
