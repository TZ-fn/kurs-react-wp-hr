import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default {
  title: 'Design System/Atoms/Paragraph',
  component: Paragraph,
  decorators: [withKnobs],
};

export const Normal = () => <Paragraph>{text('Label', 'Lorem ipsum')}</Paragraph>;
