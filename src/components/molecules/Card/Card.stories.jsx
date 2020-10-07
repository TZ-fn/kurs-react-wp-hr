import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

export default {
  title: 'Design System/Molecules/Card',
  component: Card,
  decorators: [withKnobs],
};

export const Note = () => <Card />;
export const Twitter = () => <Card cardType="twitter" />;
export const Articles = () => <Card cardType="article" />;
