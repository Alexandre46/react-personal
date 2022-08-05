import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="HTML"
          />
          <Carousel.Caption>
            <h3>HTML</h3>
            <p>Hypertext Markup Language</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src="https://www.wallpaperflare.com/static/900/618/451/syntax-highlighting-code-color-codes-css-wallpaper.jpg"
            alt="CSS"
          />

          <Carousel.Caption>
            <h3>CSS</h3>
            <p>Cascade Style sheets</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-image"
            src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
            alt="JS"
          />

          <Carousel.Caption>
            <h3>JS</h3>
            <p>JavaScript</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;
