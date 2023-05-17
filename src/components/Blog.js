import React from 'react';
import { Accordion, Card, Badge, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import * as loadData from '../assets/loading.json';

// Styling
const themeMode = document.querySelector('html').getAttribute('data-theme');
const modeStyle = themeMode === 'light' ? '' : '';
// categories badges
const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'light'];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sort: 'desc',
      posts: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://react-app-api.herokuapp.com/posts?_sort=createdAt:${this.state.sort}`
    ); // search from more recent posts -> old
    if (!response.ok) {
      return;
    }

    const posts = await response.json();
    this.setState({
      loading: false,
      posts
    });
  }

  setSorter = (event) => {
    const sortOrder = event.target.value;
    this.setState({ sort: sortOrder });
    this.componentDidMount();
    document.getElementById('sorter-asc').classList.remove('btn-success');
    document.getElementById('sorter-desc').classList.remove('btn-success');
    sortOrder === 'asc'
      ? document.getElementById('sorter-asc').classList.add('btn-success')
      : document.getElementById('sorter-desc').classList.add('btn-success');
  };

  render() {
    return this.state.loading ? (
      <FadeIn>
        <div className="row">
          <div className="col-12 text-center">
            <h1> Loading ... </h1>
            <Lottie options={defaultOptions} height={150} width={150} />
          </div>
        </div>
      </FadeIn>
    ) : (
      <div className="postsList pt-4">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2 className="ProductList-title pb-4">
              {' '}
              Total Posts <Badge variant="secondary"> {this.state.posts.length} </Badge>
            </h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="row">
              <div className="col-3 offset-4">
                <span> Filter posts by date: </span>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-sm btn-outline-secondary sorter-buttons"
                  id="sorter-asc"
                  value="asc"
                  onClick={(e) => this.setSorter(e)}>
                  {' '}
                  ▲ ASC{' '}
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-sm btn-outline-secondary sorter-buttons"
                  id="sorter-desc"
                  value="desc"
                  onClick={(e) => this.setSorter(e)}>
                  {' '}
                  ▼ DESC{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Posts-container pt-4">
          {this.state.posts.map((post, index) => (
            <Accordion defaultActiveKey={0}>
              <Card className={modeStyle}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {post.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <Card.Title>
                      <img
                        width="40px"
                        height="50px"
                        className="rounded-circle"
                        alt="User avatar"
                        src={post?.author?.avatar?.url}
                      />
                      &nbsp; {post.author.username} &nbsp;&nbsp;&nbsp;&nbsp;
                      {post.categories.map((category, index) => (
                        <span className="inline-block px-1" key={index}>
                          <Badge
                            variant={badgeColors[Math.floor(Math.random() * badgeColors.length)]}>
                            {' '}
                            {category.title}{' '}
                          </Badge>
                        </span>
                      ))}
                      &nbsp;&nbsp;
                    </Card.Title>
                    <Card.Text>
                      <div />
                      <div>
                        <ReactMarkdown source={post.data} escapeHtml={false} />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
