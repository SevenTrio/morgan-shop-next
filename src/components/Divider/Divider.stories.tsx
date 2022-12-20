import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider.component';

export default {
  title: `Components/Divider`,
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: ``,
};

export const WithText = Template.bind({});
WithText.args = {
  text: `or`,
};
