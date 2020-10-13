import Head from "next/head";
import Link from "next/link";
import { Flex, Box, Heading, Link as ChakraLink } from "@chakra-ui/core";

import ArticleCard from "../src/components/articleCard/ArticleCard";
import { getLastPremiumPosts, getLastFreePosts } from "../lib/sanity/sanityApi";

export default function Home({ premiumPosts, freePosts }) {
  return (
    <Box h="100%">
      <Head>
        <title>Home | Dev Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex h="30rem" justify="center" align="center">
        <Heading as="h1" size="xl">
          DEV LOG
        </Heading>
      </Flex>

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
              img={post.imageUrl}
              title={post.title}
              desc={post.title}
              author={post.authorName}
              slug={post.slug}
              avatar={post.authorImg}
              categories={post.categories}
            />
          ))}
          {/* <ArticleCard
            img="https://reactjs.org/logo-og.png"
            width="25%"
            title="test"
            desc="desc"
            author="Gauthier Bosson"
            slug="slug"
            category="test"
          />
          <ArticleCard
            img="https://reactjs.org/logo-og.png"
            width="25%"
            title="test"
            desc="desc"
            author="Gauthier Bosson"
            slug="slug"
            category="test"
          />
          <ArticleCard
            img="https://reactjs.org/logo-og.png"
            width="25%"
            title="test"
            desc="desc"
            author="Gauthier Bosson"
            slug="slug"
            category="test"
          />
          <ArticleCard
            img="https://reactjs.org/logo-og.png"
            width="25%"
            title="test"
            desc="desc"
            author="Gauthier Bosson"
            slug="slug"
            category="test"
          /> */}
        </Flex>
      </Flex>
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
