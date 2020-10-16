import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useSession } from "next-auth/client";
import { Heading, Text, Box, Flex, Image } from "@chakra-ui/core";

import { getAllPosts, getPostBySlug } from "../../lib/sanity/sanityApi";

const Post = ({ post }) => {
  const [session, loading] = useSession();

  const BlockRenderer = (props) => {
    const { style = "normal" } = props.node;

    if (/^h\d/.test(style)) {
      const level = style.replace(/[^\d]/g, "");
      return React.createElement(
        style,
        { className: `heading-${level}` },
        props.children
      );
    }

    if (style === "normal") {
      return (
        <Box py={4}>
          <Text>{props.children}</Text>
        </Box>
      );
    }

    if (style === "blockquote") {
      return (
        <Box p={4} bg="gray.100" rounded="lg">
          <Text as="cite">{props.children}</Text>
        </Box>
      );
    }

    return BlockContent.defaultSerializers.types.block(props);
  };

  if (typeof window !== "undefined" && loading) return null;

  if (!session || (post.isPremium && !session.user.isPremium))
    return <p>Vous devez être abonné pour voir ce contenu</p>;

  return (
    <>
      <Flex position="relative" h="25rem">
        <Image src={post.imageUrl} width="100%" objectFit="cover" />
        <Flex
          style={{ backdropFilter: "blur(5px)" }}
          justify="center"
          align="center"
          position="absolute"
          top="0"
          h="100%"
          w="100%"
          bg="hsla(0, 0%, 0%, 0.5)"
        >
          <Heading as="h1" color="white" size="2xl">
            {post.title}
          </Heading>
        </Flex>
      </Flex>
      <Box px={3} m="0 auto" maxW="50rem">
        <BlockContent
          blocks={post.body}
          serializers={{ types: { block: BlockRenderer } }}
        />
      </Box>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
  };
}
