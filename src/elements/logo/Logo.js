import { Text } from "@chakra-ui/core";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <a>
      <Text color="blue.700">DEV LOG</Text>
    </a>
  </Link>
);

export default Logo;
