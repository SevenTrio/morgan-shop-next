import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField.component';

export default {
  title: `Components/TextField`,
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: `Default`,
  placeholder: `Default`,
};

export const Password = Template.bind({});
Password.args = {
  label: `Password`,
  placeholder: `Password`,
  type: `password`,
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: `Helper text`,
  placeholder: `Helper text`,
  helperText: `Some important text`,
};

export const Error = Template.bind({});
Error.args = {
  label: `Error`,
  placeholder: `Error`,
  helperText: `Incorrect entry.`,
  error: true,
};
