import React, { useEffect } from 'react';
import { Accordion, Card, Badge, Button, Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import * as loadData from '../assets/loading.json';
import { Link, useParams } from 'react-router-dom';

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

const BlogDetails = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const params = useParams();
  const blogId = params.blogId;
  console.log('🚀 ~ file: BlogDetails.js:41 ~ BlogDetails ~ blogId:', blogId);

  useEffect(() => {
    const fetchSpecificPost = async () => {
      const response = await fetch(`https://react-app-api.herokuapp.com/posts?_id=${blogId}`);
      if (!response.ok) {
        return;
      }

      const posts = await response.json();
      setPosts(posts);
      setLoading(false);
    };
    fetchSpecificPost();
  }, [blogId]);

  return (
    <div className="Posts-container pt-4">
      <Button variant="info">
        <Link to="/blog">Back to Blog</Link>
      </Button>
      <Container>
        <Row>
          {posts.map((post, index) => (
            <Col xs={12}>
              <Card>
                <Card.Img variant="top" src={post.media[0].url} style={styles.postCardImage} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {post.author.username ?? post.author.email} -
                  </Card.Subtitle>

                  <Card.Text>{post.data}</Card.Text>
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
  );
};

export default BlogDetails;
