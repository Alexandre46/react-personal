import { useEffect, useState } from 'react';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { useTranslation } from 'react-i18next';
import selfie from '../assets/images/selfie.jpg';
import AboutMe from './AboutMe';
import ErrorHandler from './ErrorHandler';
import Lottie from 'react-lottie';

const styles = {
  bounce: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  introText: {
    textAlign: 'justify'
  },
  imgThumbnail: {
    ':hover': {
      transform: 'scale(1.20)'
    }
  }
};

// eslint-disable-next-line no-unused-vars
const quoteAPiUrl = 'https://type.fit/api/quotes';

function Welcome() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch(quoteAPiUrl, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((result) => result.json())
      .then((data) => {
        const firstQUote = data.shift();
        const quoteResult = `${firstQUote.text} - ${firstQUote.author}`;
        setQuote(quoteResult);
      })
      .catch((error) => {
        return <ErrorHandler errorMessage={error} />;
      });
  });

  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <StyleRoot>
      <div className="alert-alert-danger mt-5 text-center" style={styles.bounce}>
        <h5>
          <div className="row" style={styles.introText}>
            <div className="col-4 col-md-2 my-auto">
              <img
                className="ml-2 my-2 img-fluid img-thumbnail rounded-circle"
                style={styles.imgThumbnail}
                width={120}
                height={120}
                src={selfie}
                alt="Alexandre abreu selfie"
              />
            </div>
            <div className="col-8 col-md-10 my-auto">
              {t('introInitial')} <b>Alexandre Abreu</b> {t('introEnd')}{' '}
              {t('introMore', { age: year - 1990 })}
              <span role="img" aria-label="coder">
                👨🏼‍💻💻 ‍
              </span>
            </div>
          </div>
        </h5>
        <div>
          <AboutMe />
        </div>
        <div className="col-12" id="welcome-animation">
          <Lottie
            height={250}
            width={600}
            options={{
              loop: true,
              autoplay: true,
              animationData: require('../assets/programmer.json')
            }}
          />
        </div>
        <div className="col-12 font-italic font-weight-lighter mt-5">
          <div className="my-4 py-5">
            <span> {quote} </span>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Welcome;
