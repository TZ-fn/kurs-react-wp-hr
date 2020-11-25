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
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    console.log(activeItem);
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
  activeItem: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
