import React from 'react';
import { Connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const mapStateToProps = ({ twitters }) => ({ twitters });

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ id, title, content, created, twitterName }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
