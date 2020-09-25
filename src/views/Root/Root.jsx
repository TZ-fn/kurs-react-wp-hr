import React from 'react';
import Button from 'components/atoms/Button/Button';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello world!</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
