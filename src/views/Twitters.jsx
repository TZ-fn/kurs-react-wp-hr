import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const mapStateToProps = ({ twitters }) => ({ twitters });

const Twitters = ({ twitters }) => (
  <GridTemplate pageContext="twitters">
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

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
