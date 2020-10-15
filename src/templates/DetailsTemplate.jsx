import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const DetailsTemplate = () => (
  <div>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime id dolorum odit reprehenderit
      repellendus nesciunt sapiente
    </p>
    <Link to="/">go back</Link>
  </div>
);

export default DetailsTemplate;
