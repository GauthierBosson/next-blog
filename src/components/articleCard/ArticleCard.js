import Link from "next/link";
import { Box, Image, Flex, Badge, Text, Avatar } from "@chakra-ui/core";

const ArticleCard = ({
  img,
  title,
  desc,
  author,
  slug,
  categories,
  avatar,
}) => (
  <Box p={2} flex={["1 0 100%", "1 0 50%", "0 0 50%", "0 0 25%"]}>
    <Link href={`/post/${slug}`}>
      <a>
        <Box p={3} bg="#fff" boxShadow="lg" rounded="card.default">
          <Image
            w="100%"
            src={`${img}?h=250&w=300&fit=min&auto=format`}
            alt={`${slug}-img`}
            rounded="card.default"
          />
          <Box p={1}>
            <Flex flexDir="column" mt={1} align="baseline">
              <Text fontSize="xl" fontWeight="bold" color="blue.700">
                {title}
              </Text>
              <Text mt={2} fontSize="sm">
                {desc.slice(0, 150)}...
              </Text>
            </Flex>
            <Flex align="center" justify="space-between" mt={5}>
              <Flex align="center">
                <Avatar src={avatar} name={author} />
                <Text ml={3} fontSize="sm" color="gray.400">
                  {author}
                </Text>
              </Flex>
              <Box>
                {categories.map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </Box>
            </Flex>
          </Box>
        </Box>
      </a>
    </Link>
  </Box>
);

export default ArticleCard;
