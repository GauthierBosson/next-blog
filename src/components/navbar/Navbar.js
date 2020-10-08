import { Flex, Skeleton } from "@chakra-ui/core";
import { useSession } from "next-auth/client";
import Link from "next/link";

import Logo from "../../elements/logo/Logo";
import UserAvatar from "../../elements/userAvatar/UserAvatar";

const Navbar = () => {
  const [session, loading] = useSession();

  return (
    <nav>
      <Flex height="70px" paddingX={3} align="center" justify="space-between">
        <Logo />
        {loading ? (
          <Skeleton height="50px" width="50px" borderRadius="50%" />
        ) : session ? (
          <UserAvatar name={session.user.name} />
        ) : (
          <div>
            <Link href="/auth/signup">
              <a>Inscription</a>
            </Link>
            <Link href="/auth/signin">
              <a>Connexion</a>
            </Link>
          </div>
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;
