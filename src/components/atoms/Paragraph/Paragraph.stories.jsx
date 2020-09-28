import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  decorators: [withKnobs],
};

export const Primary = () => <Paragraph>{text('Label', 'Lorem ipsum')}</Paragraph>;
