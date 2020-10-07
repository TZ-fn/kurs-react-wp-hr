import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  title: 'Design System/Atoms/Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Normal = () => <Heading>Hello World!</Heading>;
export const Big = () => <Heading big>Hello World!</Heading>;
