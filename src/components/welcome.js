import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  export default function Welcome() {
        return (
            <StyleRoot>
            <div class="alert-alert-danger" style={styles.bounce}>
                <h3>Hi, My name is Alexandre Abreu and i'm a portuguese software developer 
                    <span role="img" aria-label="coder">👨🏼‍💻💻 ‍</span> 
                </h3>
                <div class="col-12 font-italic font-weight-lighter">
                I am passionate about programming, I love learning new things, discuss new ideas with the people around me, learn new thing every day and trying my best to contribute to a better world for everyone.
                <h5> The first step is to establish that something is possible, then probably will occur.</h5>
            </div>
            </div>
        </StyleRoot>
        )
  }
