import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Sidebar from './Sidebar';

export default {
  title: 'Design System/Organisms/Sidebar',
  component: Sidebar,
  decorators: [withKnobs],
};

export const Normal = () => <Sidebar />;
