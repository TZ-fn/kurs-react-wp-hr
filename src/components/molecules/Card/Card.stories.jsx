import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const Normal = () => {
  const label = 'Colors';
  const options = {
    Note: 'note',
    Twitter: 'twitter',
    Article: 'article',
  };
  const defaultValue = 'note';

  const value = select(label, options, defaultValue);

  return <Card activeColor={value} />;
};
