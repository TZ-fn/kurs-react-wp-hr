import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import routes from 'routes/index';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi dolore voluptatum quia. Pariatur doloribus quibusdam repellendus harum recusandae minima qui soluta molestiae quisquam expedita, ea ducimus asperiores eum earum?',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        twitterName={dummyArticle.twitterName}
        articleUrl={dummyArticle.articleUrl}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetailsPage;
