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

//categories badges
const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'light'];

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    }
  }

async componentDidMount() {
   let response = await fetch("https://react-app-api.herokuapp.com/posts");
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
        <h2 className="ProductList-title pb-4"> Total Posts <Badge variant="secondary"> {this.state.posts.length} </Badge></h2>
        <div className="Posts-container">
          {this.state.posts.map((post, index) => {            
            function CustomToggle({ children, eventKey }) {
              const decoratedOnClick = useAccordionToggle(eventKey, () =>
                console.log('totally custom!'),
              );

              return (
                <button
                  type="button btn-sm"
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
                  - <Moment format="MMM Do YYYY">{post.published_at}</Moment>

                  <Badge> </Badge>
                  </CustomToggle>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      <Card.Title> 
                        <img width="40px" height="50px" className="rounded-circle" src={post?.author?.avatar?.url} />
                         &nbsp; { post.author.username} &nbsp;&nbsp;&nbsp;&nbsp;
                         { post.categories.map((category) => {
                           return (<span className="inline-block px-1"><Badge variant={badgeColors[Math.floor(Math.random() * badgeColors.length)]}> { category.title } </Badge></span>);
                           
                        })}&nbsp;&nbsp;
                      </Card.Title>
                      <Card.Text>
                        <img className="img-fluid" src={post?.media[0]?.url} />
                        <ReactMarkdown source={post.data} />
                      </Card.Text>
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