import React, { useEffect } from 'react';
import { Accordion, Card, Badge, Button, Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import * as loadData from '../assets/loading.json';
import { Link, Router, useRoutes } from 'react-router-dom';

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

const styles = {
  postCard: {
    height: '35rem'
  },
  postCardImage: {
    width: 286,
    height: 150
  }
};

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [sort, setSort] = React.useState('desc');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://react-app-api.herokuapp.com/posts?_sort=createdAt:${sort}`
      ); // search from more recent posts -> old
      if (!response.ok) {
        return;
      }

      const posts = await response.json();
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, [sort]);

  const setSorter = (event) => {
    const sortOrder = event.target.value;
    setSort(sortOrder);
    document.getElementById('sorter-asc').classList.remove('btn-success');
    document.getElementById('sorter-desc').classList.remove('btn-success');
    sortOrder === 'asc'
      ? document.getElementById('sorter-asc').classList.add('btn-success')
      : document.getElementById('sorter-desc').classList.add('btn-success');
  };

  return loading ? (
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
            Total Posts <Badge variant="secondary"> {posts.length} </Badge>
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
                onClick={(e) => setSorter(e)}>
                {' '}
                ▲ ASC{' '}
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-sm btn-outline-secondary sorter-buttons"
                id="sorter-desc"
                value="desc"
                onClick={(e) => setSorter(e)}>
                {' '}
                ▼ DESC{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Posts-container pt-4">
        <Container>
          <Row>
            {posts.map((post, index) => (
              <Col xs={12} md={6} xl={3}>
                <Card>
                  <Card.Img variant="top" src={post.media[0].url} style={styles.postCardImage} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {post.author.username ?? post.author.email} -{' '}
                      <Moment fromNow>{post.createdAt}</Moment>
                    </Card.Subtitle>

                    <Card.Text>{post.data.substring(0, 300) + '...'}</Card.Text>
                    <Button variant="info">
                      <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                        Read more{' '}
                      </Link>
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    {post.categories.map((category, index) => (
                      <span className="inline-block px-1" key={index}>
                        <Badge>{category.title}</Badge>
                      </span>
                    ))}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
