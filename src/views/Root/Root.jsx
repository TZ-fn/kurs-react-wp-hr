import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello world!</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </>
);

export default Root;
