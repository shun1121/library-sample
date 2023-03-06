import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  text: 'Hello World',
  color: 'primary',
  size: 'md',
  shape: 'default'
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  text: 'Click Me',
};
