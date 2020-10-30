import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const mapStateToProps = ({ notes }) => ({ notes });

const Notes = ({ notes }) => (
  <GridTemplate pageContext="notes">
    {notes.map(({ id, title, content, created }) => (
      <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
