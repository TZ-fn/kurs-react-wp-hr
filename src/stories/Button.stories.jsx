import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Save / Close</Button>;
export const Secondary = () => <Button secondary>Remove</Button>;
