import React, { Component } from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { withTranslation } from 'react-i18next';

const styles = {
    bounce: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  class Welcome extends Component {
    render() {
        const { t } = this.props;
        return(
            <StyleRoot>
                <div className="alert-alert-danger mt-5 text-center" style={styles.bounce}>
                    <h3>{t("introInitial")} <i>Alexandre Abreu</i> {t("introEnd")}
                        <span role="img" aria-label="coder">👨🏼‍💻💻 ‍</span> 
                    </h3>
                    <div className="col-12 font-italic font-weight-lighter mt-5">
                        {t("introMore", { age: 29})}
                        <h5> {t('introSentence')}</h5>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4"> 
                            <a target="_blank" href="https://www.facebook.com/Alexandreabreu46" className="text-decoration-none"><img src="https://res.cloudinary.com/cinforme/image/upload/v1583693642/BLOG/iconfinder_square-facebook_317727_1.png" alt="Facebook icon"/></a>
                        </div>
                        <div className="col-4">
                            <a target="_blank" href="https://www.linkedin.com/in/alexandreabreu46/" className="text-decoration-none"><img src="https://res.cloudinary.com/cinforme/image/upload/v1583693642/BLOG/iconfinder_square-linkedin_317725.png" alt="Linkedin icon"/></a>
                        </div>
                        <div className="col-4">
                            <a target="_blank" href="https://github.com/Alexandre46" className="text-decoration-none"><img src="https://res.cloudinary.com/cinforme/image/upload/v1583694229/BLOG/iconfinder__github_copy_2006960.png" alt="Facebook icon"/></a>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    }
        
}
  

  export default withTranslation()(Welcome);
