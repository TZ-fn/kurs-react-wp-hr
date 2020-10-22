import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 90vh;
  max-width: 50vw;
  padding: 25px 50px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0px;
`;

const StyledCreatedParagraph = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
`;
const StyledContentParagraph = styled(Paragraph)`
  margin: 40px 0 40px;
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 70px;
`;

const StyledTwitterAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 30px;
`;

const StyledDeleteButton = styled(Button)`
  padding: 0;
  margin: 0;
  text-transform: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const DetailsTemplate = ({ pageType, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledCardWrapper>
        <StyledHeading big>{title}</StyledHeading>
        <StyledCreatedParagraph>{created}</StyledCreatedParagraph>
        <StyledContentParagraph>{content}</StyledContentParagraph>
        {pageType === 'articles' && <StyledLink href={articleUrl}>Open this article</StyledLink>}
        {pageType === 'twitters' && (
          <>
            <StyledLink href={`https://twitter.com/${twitterName}`}>Open this twitter</StyledLink>
            <StyledTwitterAvatar alt={title} src={`https://unavatar.now.sh/${twitterName}`} />
          </>
        )}
        <Button as={Link} to={`/${pageType}`} pageType={pageType}>
          Save / Close
        </Button>
        <StyledDeleteButton>remove note</StyledDeleteButton>
      </StyledCardWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

export default DetailsTemplate;
