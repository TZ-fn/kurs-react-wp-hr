import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

const LoginPage = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={() => {
      axios.post('');
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
);

export default LoginPage;
