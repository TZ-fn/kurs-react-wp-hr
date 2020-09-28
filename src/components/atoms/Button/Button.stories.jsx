import React from 'react';
import theme from 'theme/mainTheme';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Primary: theme.primary,
    Secondary: theme.secondary,
    Tertiary: theme.tertiary,
  };
  const defaultValue = theme.primary;

  const value = select(label, options, defaultValue);

  return <Button color={value}>{text('Label', 'Save / Close')}</Button>;
};

export const Secondary = () => <Button secondary>{text('Label', 'Return')}</Button>;
