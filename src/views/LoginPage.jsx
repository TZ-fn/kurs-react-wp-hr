import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import logoImg from 'assets/icons/logo.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginPage = () => (
  <StyledWrapper>
    <StyledLogo src={logoImg} alt="" />
    <Heading>Your new favorite online notes experience</Heading>
    <StyledAuthCard>
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
          <>
            <Heading>Sign In</Heading>
            <StyledForm>
              <Field name="username" type="text" />
              <Field name="password" type="password" />
              <Button type="submit">sign in</Button>
            </StyledForm>
          </>
        )}
      </Formik>
    </StyledAuthCard>
  </StyledWrapper>
);

export default LoginPage;
