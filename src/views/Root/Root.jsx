import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Button from 'components/atoms/Button/Button';

const Root = () => (
  <MainTemplate>
    <>
      <h1>Hello world!</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  </MainTemplate>
);

export default Root;
