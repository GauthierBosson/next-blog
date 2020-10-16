import Head from "next/head";
import Link from "next/link";
import { Flex, Box, Heading, Link as ChakraLink } from "@chakra-ui/core";

import ArticleCard from "../src/components/articleCard/ArticleCard";
import { getLastPremiumPosts, getLastFreePosts } from "../lib/sanity/sanityApi";
import TechnoAnimation from "../src/elements/technoAnimation/TechnoAnimation";
import WordsAnimation from "../src/elements/wordsAnimation/WordsAnimation";

export default function Home({ premiumPosts, freePosts }) {

  return (
    <Box maxW="80rem" m="0 auto" h="100%">
      <Head>
        <title>Home | Dev Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Find all the content you need to enhance your development skills"
        />
      </Head>

      <Flex direction="column" h="30rem" justify="center">
        <WordsAnimation />
        <TechnoAnimation />
      </Flex>

      <Box>
        <Flex p={8} direction="column">
          <Flex align="center" justify="space-between">
            <Heading as="h2" size="lg">
              Derniers articles payant
            </Heading>
            <Link href="/post" passHref>
              <ChakraLink>Voir tous les articles payant</ChakraLink>
            </Link>
          </Flex>

          <Flex mt={4} wrap="wrap">
            {premiumPosts.map((post) => (
              <ArticleCard
                key={post._id}
                img={post.imageUrl}
                title={post.title}
                desc={post.title}
                author={post.authorName}
                slug={post.slug}
                avatar={post.authorImg}
                categories={post.categories}
              />
            ))}
          </Flex>
        </Flex>

        <Flex mt={4} p={8} direction="column">
          <Flex align="center" justify="space-between">
            <Heading as="h2" size="lg">
              Derniers articles gratuit
            </Heading>
            <Link href="/post" passHref>
              <ChakraLink>Voir tous les articles gratuit</ChakraLink>
            </Link>
          </Flex>

          <Flex mt={4} wrap="wrap">
            {freePosts.map((post) => (
              <ArticleCard
                key={post._id}
                img={post.imageUrl}
                title={post.title}
                desc={post.title}
                author={post.authorName}
                slug={post.slug}
                avatar={post.authorImg}
                categories={post.categories}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const premiumPosts = await getLastPremiumPosts();
  const freePosts = await getLastFreePosts();

  return {
    props: { premiumPosts, freePosts },
  };
}
