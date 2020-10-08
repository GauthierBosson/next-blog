import { Flex } from "@chakra-ui/core";

import SignupForm from "../../src/components/signupForm/SignupForm";

const Signup = () => (
  <Flex height="calc(100vh - 70px)" align="center" justify="center">
    <SignupForm />
  </Flex>
);

export default Signup;
