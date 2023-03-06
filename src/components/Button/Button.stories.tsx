import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["none", "primary", "success", "danger"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  text: "Hello World",
  color: "primary",
  size: "md",
  shape: "default",
  textSize: "md",
  outline: "none",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  text: "Click Me",
};
