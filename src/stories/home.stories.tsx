import Home from 'pages/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStory<typeof Home> = () => <Home />;
