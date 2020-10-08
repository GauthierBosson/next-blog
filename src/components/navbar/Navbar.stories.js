import React from "react";

import Navbar from "./Navbar";

export default {
  title: "navigation/navbar",
  component: Navbar,
};

const Template = args => <Navbar {...args} />

export const NavigationBasic = Template.bind({});
