import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  height: 100vh;
  width: 680px;
  border-left: 10px solid ${({ theme, pageContext }) => theme[pageContext]};
  background-color: white;
  box-shadow: 0 20px 60px -10px hsla(0, 0%, 0%, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
  resize: none;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper pageContext={pageContext} isVisible={isVisible}>
    <Heading big>Create a new {[...pageContext].slice(0, -1).join('')} </Heading>
    <StyledInput placeholder="title" />
    {pageContext === 'twitters' && <StyledInput placeholder="twitter name eg. hello_roman" />}
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="content" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello World',
          content: 'lorem ipsum dolor sit',
        })
      }
      pageContext={pageContext}
    >
      Add {[...pageContext].slice(0, -1).join('')}
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
