import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography.component';

export default {
  title: `Components/Typography`,
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Headline1 = Template.bind({});
Headline1.args = {
  children: `Headline1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `h1`,
};

export const Body1 = Template.bind({});
Body1.args = {
  children: `Body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `body1`,
};

export const Body2 = Template.bind({});
Body2.args = {
  children: `Body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `body2`,
};

export const Body3 = Template.bind({});
Body3.args = {
  children: `Body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `body3`,
};

export const ButtonText = Template.bind({});
ButtonText.args = {
  children: `ButtonText. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `buttonText`,
};

export const Caption1 = Template.bind({});
Caption1.args = {
  children: `Caption1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `caption1`,
};

export const Caption2 = Template.bind({});
Caption2.args = {
  children: `Caption2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `caption2`,
};

export const Caption3 = Template.bind({});
Caption3.args = {
  children: `Caption3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  variant: `caption3`,
};
