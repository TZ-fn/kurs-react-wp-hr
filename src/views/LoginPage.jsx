import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import logo from 'assets/icons/logo.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
`;

const LoginPage = () => (
  <StyledWrapper>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:9000/api/user/login', {
            username,
            password,
          })
          .then(({ status }) => console.log(status))
          .catch((err) => console.log(err));
      }}
    >
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <Button type="submit">sign in</Button>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

export default LoginPage;
