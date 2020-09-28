import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Normal = () => <Heading>Hello World!</Heading>;
export const Big = () => <Heading big>Hello World!</Heading>;
