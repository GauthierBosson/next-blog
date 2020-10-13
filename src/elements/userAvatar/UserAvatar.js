import { Avatar } from "@chakra-ui/core";

const UserAvatar = ({ name, src, ...rest }) => (
  <Avatar name={name} src={src} {...rest} />
)

export default UserAvatar;
