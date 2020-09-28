import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input placeholder="search" search />;
