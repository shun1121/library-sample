import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Footer",
  component: Footer,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = ({ children, ...args }) => (
  <Footer {...args}>{children}</Footer>
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  copyright: "@2023 aaa bbbb",
  children: (
    <div>
      <div>
        <a href="/" rel="noopener noreferrer">
          <p>Help</p>
        </a>
      </div>
      <div>
        <a href="" rel="noopener noreferrer">
          <p>Status</p>
        </a>
      </div>
      <div>
        <a href="" rel="noopener noreferrer">
          <p>Writers</p>
        </a>
      </div>
    </div>
  ),
};
