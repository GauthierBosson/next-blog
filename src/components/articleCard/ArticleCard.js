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
  <Box m={2} flex={["1 0 51%", "1 0 47%", "1 0 47%" ,"1 0 20%"]}>
    <Link href={`/post/${slug}`}>
      <a>
        <Box bg="#fff" boxShadow="lg" rounded="lg">
          <Image src={img} alt={`${slug}-img`} roundedTop="lg" />
          <Box p={4}>
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
              <Avatar src={avatar} />
              <Text ml={3} fontSize="sm" color="gray.400">
                {author}
              </Text>
            </Flex>
            <Box>
              {categories.map(category => (
                <Badge>{category}</Badge>
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
