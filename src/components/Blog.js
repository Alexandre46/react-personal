import React from 'react';
import { Accordion, Card, Badge, useAccordionToggle } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";
import * as loadData from "../assets/loading.json";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

//Styling
const themeMode = document.querySelector('html').getAttribute('data-theme');
const modeStyle = (themeMode === 'light') ? '' : '';
//categories badges
const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'light'];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sort: "desc",
      posts: []
    }
  }

async componentDidMount() {
   let response = await fetch("https://react-app-api.herokuapp.com/posts?_sort=createdAt:"+this.state.sort); // search from more recent posts -> old
   if (!response.ok) {
    return
  }

  let posts = await response.json()
  this.setState({ 
    loading: false,
    posts: posts,
  })
}

setSorter=(event)=>{
  let sortOrder = event.target.value;
  this.setState({sort:sortOrder})
  this.componentDidMount();
  document.getElementById('sorter-asc').classList.remove('btn-success')
  document.getElementById('sorter-desc').classList.remove('btn-success')
  sortOrder === 'asc' 
    ? document.getElementById('sorter-asc').classList.add('btn-success')
    : document.getElementById('sorter-desc').classList.add('btn-success')
}

render() {
  return (
   (this.state.loading) 
   ? 
    <FadeIn>
        <div class="row">
          <div class="col-12 text-center">
            <h1> Loading ... </h1>
              <Lottie options={defaultOptions} height={150} width={150}/>
          </div>
        </div>
    </FadeIn>
    : (
      <div className="postsList">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h2 className="ProductList-title pb-4"> Total Posts <Badge variant="secondary"> {this.state.posts.length} </Badge></h2>
          </div>
          <div className="col-12 col-lg-8">
            <div class="row">
              <div class="col-12 col-lg-4"><span> Filter posts by date: </span></div>
              <div class="col-12 col-lg-4">
                <button className="btn btn-sm btn-outline-secondary sorter-buttons" id="sorter-asc" value="asc" onClick={(e) => this.setSorter(e)}> ▲ Oldest to Most recent </button>
              </div>
              <div class="col-12 col-lg-4">
              <button className="btn btn-sm btn-outline-secondary sorter-buttons mx-3" id="sorter-desc" value="desc" onClick={(e) => this.setSorter(e)}> ▼ Most recent to oldest </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Posts-container">
          {this.state.posts.map((post, index) => {            
            function CustomToggle({ children, eventKey }) {
              const decoratedOnClick = useAccordionToggle(eventKey);

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
                        <img width="40px" height="50px" className="rounded-circle" alt="User avatar" src={post?.author?.avatar?.url} />
                         &nbsp; { post.author.username} &nbsp;&nbsp;&nbsp;&nbsp;
                         { post.categories.map((category) => {
                           return (<span className="inline-block px-1"><Badge variant={badgeColors[Math.floor(Math.random() * badgeColors.length)]}> { category.title } </Badge></span>);
                           
                        })}&nbsp;&nbsp;
                      </Card.Title>
                      <Card.Text>
                        <img className="img-fluid" alt="Blog post media" src={post?.media[0]?.url} />
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
    )
  )}
}

export default Blog;