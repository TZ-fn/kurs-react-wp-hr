import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Design System/Organisms/Sidebar',
  component: Sidebar,
  decorators: [withKnobs, StoryRouter()],
};

export const Normal = () => <Sidebar />;
