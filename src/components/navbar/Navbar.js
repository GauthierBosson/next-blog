import {
  Flex,
  Skeleton,
  Box,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/core";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { signOut } from "next-auth/client";

import Logo from "../../elements/logo/Logo";
import UserAvatar from "../../elements/userAvatar/UserAvatar";

const Navbar = () => {
  const [session, loading] = useSession();

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      zIndex="10"
      width="100%"
      bg="white"
      boxShadow="0 5px 5px -5px hsla(0, 0%, 0%, 0.2)"
    >
      <nav>
        <Flex
          height="70px"
          maxW="80rem"
          m="0 auto"
          paddingX={3}
          align="center"
          justify="space-between"
        >
          <Logo />
          {loading ? (
            <Skeleton height="50px" width="50px" borderRadius="50%" />
          ) : session ? (
            <Flex align="center">
              <Link href="/profile">
                <a>
                  <UserAvatar name={session.user.name} mr={3} />
                </a>
              </Link>
              <Button variant="link" onClick={signOut}>
                Signout
              </Button>
            </Flex>
          ) : (
            <div>
              <Link href="/auth/signup" passHref>
                <ChakraLink>Inscription</ChakraLink>
              </Link>
              <Link href="/auth/signin" passHref>
                <ChakraLink>Connexion</ChakraLink>
              </Link>
            </div>
          )}
        </Flex>
      </nav>
    </Box>
  );
};

export default Navbar;
