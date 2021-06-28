import React, { Component } from 'react'
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { withTranslation } from 'react-i18next';

const styles = {
    bounce: {
      animation: 'x 0.1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  const myPhotoUrl = 'https://scontent.ffnc1-1.fna.fbcdn.net/v/t1.0-9/10590628_10204527052915271_7554021373360325368_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_eui2=AeG8sSlAum8kSsSqovaclCLtrNvtHegCkeKs2-0d6AKR4lujQCbDeWN8npKSzus2MZ8&_nc_ohc=trM3sMvm32EAX8Hj_mT&_nc_ht=scontent.ffnc1-1.fna&oh=c401191437ee43400a3e9fad99338f45&oe=5F8BD76D';

class AboutMe extends Component {
      render() {
        const { t } = this.props;
          return (
            <StyleRoot>
                <div className="test my-4" style={styles.bounce}>
                  <img width="80px" height="80px" className="rounded-circle" alt="User avatar" src={myPhotoUrl} /> &nbsp;
                    {t("aboutMeInfo")}
                </div>
            </StyleRoot> 
          )
      }
  }

  export default withTranslation()(AboutMe)