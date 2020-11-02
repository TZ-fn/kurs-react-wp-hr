import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  z-index: 10000;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ pageContext, theme }) => theme[pageContext]};
  background-size: 35%;
  border-radius: 50%;
`;

const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>4 {pageContext}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
      <StyledButtonIcon icon={plusIcon} pageContext={pageContext} />
      <NewItemBar />
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
