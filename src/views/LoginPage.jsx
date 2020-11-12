import React, { Component } from 'react';
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
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Field)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

const StyledLink = styled(Button)`
  height: 20px;
  margin-top: 10px;
  color: black;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  text-decoration: underline;
`;

class LoginPage extends Component {
  state = {
    isRegisterPage: true,
  };

  handlePageSwitch = () => {
    this.setState((prevState) => ({
      isRegisterPage: !prevState.isRegisterPage,
    }));
  };

  render() {
    const { isRegisterPage } = this.state;
    return (
      <StyledWrapper>
        <StyledLogo src={logoImg} alt="" />
        <Heading>Your new favorite online notes experience</Heading>
        <StyledAuthCard>
          <Heading>{isRegisterPage ? 'Create an account' : 'Sign in'}</Heading>
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
                <StyledForm>
                  <StyledInput name="username" type="text" placeholder="login" />
                  <StyledInput name="password" type="password" placeholder="password" />
                  <Button pageContext="notes" type="submit">
                    {isRegisterPage ? 'Register' : 'Sign in'}
                  </Button>
                </StyledForm>
                <StyledLink onClick={this.handlePageSwitch}>
                  {isRegisterPage ? 'I want to log in!' : 'I want my account!'}
                </StyledLink>
              </>
            )}
          </Formik>
        </StyledAuthCard>
      </StyledWrapper>
    );
  }
}

export default LoginPage;
