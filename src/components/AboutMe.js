import React, { Component } from 'react'
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 0.1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  export default class AboutMe extends Component {
      render() {
          return (
            <StyleRoot>
                <div className="test my-4" style={styles.bounce}>
                    There's a lot of things i can talk but basically i am 29-year-old Portuguese coder who really enjoys this job. 
                    I've always be curious to discover new things on this field, start interaction with Computers since my 7-8 years old when my parents bought our
                    first personal computer. On college i've decided to go to technical course instead of normal /common area, and go to university to Computer Science
                    degree. Finished my CS @2014 and since 2016 i'm working on software development, i'm currently on second company since university.
                    I've been working on VOD (video-on-demand) projects , internet banking & news projects
                </div>
            </StyleRoot> 
          )
      }
  }