import React from "react";

import StripeCheckout from "./StripeCheckout";

export default {
  title: "checkout/stripe",
  element: StripeCheckout
}

const Template = args => <StripeCheckout {...args} />

export const StripeCO = Template.bind({});