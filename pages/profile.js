import { getSession } from "next-auth/client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/core";

import StripeCheckout from "../src/components/stripeCheckout/StripeCheckout";

const Profile = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={onOpen}>S'abonner</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>S'abonner</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StripeCheckout />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    const { user } = session;

    return {
      props: {
        user,
      },
    };
  } else {
    context.res.writeHead(302, { Location: "/auth/signin" });
    context.res.end();

    return { props: {} };
  }
}
