import React from "react";

import ArticleCard from "./ArticleCard";

export default {
  title: "article/card",
  component: ArticleCard,
};

const Template = (args) => <ArticleCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  img: "https://reactjs.org/logo-og.png",
  title: "Test titre",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus ante, non malesuada risus sagittis in. Donec finibus interdum nibh, in tincidunt justo vulputate eu. Nam volutpat porta nulla, intristique ligula. Curabitur finibus et tellus.",
  author: "Gauthier Bosson",
  width: "25%",
  category: "react",
  slug: "test-article"
};
