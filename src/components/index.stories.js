import React from "react";

import { DynamicImage } from "./index";

const DynamicImageTemplate = (args) => <DynamicImage {...args} />;

export const DynamicImageStory = DynamicImageTemplate.bind({});

export default {
  title: "Tangs/DynamicImage",
  component: DynamicImage,
};
