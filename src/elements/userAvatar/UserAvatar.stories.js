import React from "react";

import UserAvatar from "./UserAvatar";

export default {
  title: "user/avatar",
  component: UserAvatar,
};

const Template = args => <UserAvatar {...args} />

export const Avatar = Template.bind({});
Avatar.args = {
  name: '',
  src: ''
}
