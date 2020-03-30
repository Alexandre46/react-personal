import React, { lazy, Component, Suspense } from 'react';
import { Accordion, Card, Badge, useAccordionToggle } from 'react-bootstrap';
import Strapi from 'strapi-sdk-javascript/build/main';
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";

//STRAPI CMS SDK
const strapi = new Strapi('http://localhost:1337');
//Styling
const themeMode = document.querySelector('html').getAttribute('data-theme');
const modeStyle = (themeMode === 'light') ? '' : '';


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    }
  }

async componentDidMount() {
   let response = await fetch("http://localhost:1337/posts");
   if (!response.ok) {
    return
  }

  let posts = await response.json()
  this.setState({ loading: false, posts: posts })
}


render() {
  if (!this.state.loading) {
    return (
      <div className="postsList">
        <h2 className="ProductList-title">Available Posts <Badge variant="secondary"> {this.state.posts.length} </Badge></h2>
        <div className="Posts-container">
          {this.state.posts.map((post, index) => {            
            function CustomToggle({ children, eventKey }) {
              const decoratedOnClick = useAccordionToggle(eventKey, () =>
                console.log('totally custom!'),
              );

              return (
                <button
                  type="button"
                  style={{ backgroundColor: 'gray', textAlign : 'left' }}
                  onClick={decoratedOnClick}
                >
                  {children}
                </button>
              );
            }
            return (
              <Accordion defaultActiveKey={0}>
                <Card className={modeStyle}>
                  <CustomToggle as={Card.Header} eventKey={index}>
                  <b> {post.title} </b>
                  </CustomToggle>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      <ReactMarkdown source={post.data} />
                      <p className="pt-4">
                        <Moment format="MMM Do YYYY">{post.published_at}</Moment>
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            );
          })}
        </div>
      </div>
    );
  }
  return (<h2 className="ProductList-title">Waiting for API...</h2>);
  } 
}

export default Blog;