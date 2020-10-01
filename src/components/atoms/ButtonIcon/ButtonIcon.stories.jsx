/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import BulbIcon from 'assets/icons/bulb.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import PenIcon from 'assets/icons/pen.svg';
import PlusIcon from 'assets/icons/plus.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [withKnobs, (storyFn) => <YellowBackground>{storyFn()}</YellowBackground>],
};

export const Bulb = () => <ButtonIcon active={boolean('Active', false)} icon={BulbIcon} />;
export const Logout = () => <ButtonIcon icon={LogoutIcon} />;
export const Pen = () => <ButtonIcon icon={PenIcon} />;
export const Plus = () => <ButtonIcon icon={PlusIcon} />;
export const Twitter = () => <ButtonIcon icon={TwitterIcon} />;
