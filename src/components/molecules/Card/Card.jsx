import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
`;

const Card = ({ activeColor }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={activeColor}>
      <StyledHeading>My card</StyledHeading>
      <DateInfo>3 days ago</DateInfo>
    </InnerWrapper>

    <InnerWrapper flex>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis repudiandae,
        dignissimos quisquam earum
      </Paragraph>

      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
