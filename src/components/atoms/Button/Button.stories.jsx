import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Note: 'note',
    Twitter: 'twitter',
    Article: 'article',
  };
  const defaultValue = 'note';

  const value = select(label, options, defaultValue);

  return <Button color={value}>{text('Label', 'Save / Close')}</Button>;
};

export const Secondary = () => <Button secondary>{text('Label', 'Return')}</Button>;
