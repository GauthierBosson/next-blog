import { Flex } from "@chakra-ui/core";

import SigninForm from "../../src/components/signinForm/SigninForm";

const Signin = () => (
  <Flex bg="gray.50" height="calc(100vh - 70px)" align="center" justify="center">
    <SigninForm />
  </Flex>
);

export default Signin;
