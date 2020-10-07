import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import BulbIcon from 'assets/icons/bulb.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';

const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon icon={PenIcon} />
      <ButtonIcon icon={TwitterIcon} />
      <ButtonIcon icon={BulbIcon} />
    </div>
    <ButtonIcon icon={LogoutIcon} />
  </div>
);

export default Sidebar;
