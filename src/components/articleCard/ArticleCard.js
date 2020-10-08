import Link from "next/link";
import { Box, Image, Flex, Badge, Text, Avatar } from "@chakra-ui/core";

const ArticleCard = ({
  width,
  img,
  title,
  desc,
  author,
  slug,
  category,
  avatar,
}) => (
  <Box w={width}>
    <Link href={`/post/${slug}`}>
      <a>
        <Box bg="#fff" borderWidth="1px" rounded="md" p={4}>
          <Image src={img} alt={`${slug}-img`} rounded="md" />
          <Flex flexDir="column" mt={2} align="baseline">
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
              <Badge>{category}</Badge>
            </Box>
          </Flex>
        </Box>
      </a>
    </Link>
  </Box>
);

export default ArticleCard;
