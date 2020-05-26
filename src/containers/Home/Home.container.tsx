import { Box, Divider, Heading, Flex, Image, Button } from "@chakra-ui/core";
import Head from "next/head";
import {
  Layout,
  HeroBanner,
  Showcase,
  Header,
  Discussion,
  DiscussionSkeleton,
  Release,
  ReleaseSkeleton,
} from "../../components";
import styles from "./Home.module.scss";

const discussions = [
  // {
  //   title: "Hello Me",
  //   likes: 4,
  //   content:
  //     "Hurricane Fred was the easternmost Atlantic hurricane ever to form in the tropics, and the first to move through Cape Verde since 1892. The second hurricane of the 2015 Atlantic hurricane season, Fred became a Category 1 hurricane on August 31 as it approached Cape Verde, which was placed under a hurricane warning for the first time ever. The Barlavento Islands endured gales and flooding rains as the eye of the hurricane paralleled their shorelines. Structural damage across Boa Vista and Sal presented as leveled roofs, damaged homes and toppled utility poles. Farmers on São Nicolau suffered crop and livestock losses when they saw their lands flood. Fred's rains, though destructive, alleviated a drought across the Sotavento Islands of Cape Verde. Elsewhere, violent seas along the West African shoreline destroyed fishing villages and submerged homes in Senegal. Between the coasts of West Africa and Cape Verde, nine people died in maritime incidents.",
  // },
  // {
  //   title: `In agnosticism, the existence of God is deemed unknown or unknowable`,
  //   likes: 1546,
  //   content: `In monotheistic thought, God is conceived of as the supreme being, creator deity, and principal object of faith.[1] God is usually conceived as being omniscient (all-knowing), omnipotent (all-powerful), omnipresent (all-present) and as having an eternal and necessary existence. These attributes are used either in way of analogy or are taken literally. God is most often held to be incorporeal (immaterial).[1][2][3] Incorporeality and corporeality of God are related to conceptions of transcendence (being outside nature) and immanence (being in nature) of God, with positions of synthesis such as the "immanent transcendence`,
  // },
  // {
  //   title: `The earliest written form of the Germanic word God comes from the 6th-century Christian Codex Argenteus.`,
  //   likes: 1546,
  //   content: ` Yahweh and Jehovah, possible vocalizations of YHWH, are used in Christianity. In the Christian doctrine of the Trinity, God, coexisting in three "persons", is called the Father, the Son, and the Holy Spirit. In Islam, the name Allah is used, while Muslims also have a multitude of titular names for God. In Hinduism, Brahman is often considered a monistic concept of God.`,
  // },
];

const releases = [];

export default function Home() {
  const loadingDiscussions = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<DiscussionSkeleton />);
    }
    return arr;
  };

  const loadingReleases = () => {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(<ReleaseSkeleton />);
    }
    return arr;
  };

  return (
    <>
      <Head>
        <title>ChapterWing - Homepage</title>
      </Head>
      <Box boxSizing="border-box">
        <Layout>
          <HeroBanner />
          <div className={styles.container}>
            <Showcase />
            <div className={styles.content1}>
              <p>Start hosting your novel on ChapterWing and</p>
              <p>be Discovered.</p>
            </div>
            <Header name="Top Discussions" />
            <Box padding="5px">
              {discussions.length !== 0
                ? discussions.map((discussion) => (
                    <Discussion
                      title={discussion.title}
                      content={discussion.content}
                      likes={discussion.likes}
                    />
                  ))
                : loadingDiscussions()}
            </Box>
            <Divider w="90%" margin="5px auto" borderColor="background.300" />
            <Header name="Recommended Releases" />
            <Box padding="5px">
              {releases.length !== 0
                ? releases.map((novel) => <Release novel={novel} />)
                : loadingReleases()}
            </Box>
            <Divider w="90%" margin="5px auto" borderColor="background.300" />
            <Box margin="20px">
              <Heading
                size="sm"
                color="white"
                display="flex"
                justifyContent="center"
                margin="15px 0"
              >
                Why Sign up on ChapterWing?
              </Heading>
              <Flex justifyContent="space-around">
                <Box
                  w="80%"
                  color="#d3d3d3"
                  fontWeight="bold"
                  fontSize="14px"
                  className={styles.whysignup}
                >
                  Features to make your reading easier
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                  <p>
                    <span>-</span> Bookmark your favorite book in one place
                  </p>
                </Box>
                <Image src="/icons/read.svg" alt="read" />
              </Flex>
            </Box>
            <Box margin="20px">
              <Flex justifyContent="space-around">
                <Box
                  w="80%"
                  color="#d3d3d3"
                  fontWeight="bold"
                  fontSize="14px"
                  className={styles.whysignup}
                >
                  Start Writing Your Novel
                  <p>
                    <span>-</span> Tools to make your writing easier to manage
                  </p>
                  <p>
                    <span>-</span> Show others your story to thousands
                  </p>
                  <p>
                    <span>-</span> Get pay to write your story
                  </p>
                </Box>
                <Image src="/icons/write.svg" alt="write" />
              </Flex>
            </Box>
            <Flex justifyContent="center" margin="15px 0">
              <Button variantColor="primary">Sign Up</Button>
            </Flex>
          </div>
        </Layout>
      </Box>
    </>
  );
}
