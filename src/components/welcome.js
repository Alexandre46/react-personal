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
                    <br/>
                        <span role="img" aria-label="coder">👨🏼‍💻💻 ‍</span> 
                    </h3>
                    <div className="col-12 font-italic font-weight-lighter mt-5">
                        {t("introMore", { age: 29})}
                        <br />
                        <br />

                        <h5> {t('introSentence')}</h5>
                    </div>
                </div>
            </StyleRoot>
        );
    }
        
}
  

  export default withTranslation()(Welcome);
