import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const { activeItem } = this.props;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`https://kurs-react-wp-hr-backend.herokuapp.com/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  activeItem: PropTypes.object,
};

DetailsTemplate.defaultProps = {
  activeItem: {},
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].find((item) => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
