import React, { Component } from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { withTranslation } from "react-i18next";
import selfie from "../assets/images/selfie.jpg";
import AboutMe from "../components/AboutMe";

const styles = {
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
  introText: {
    textAlign: "justify",
  },
};

// eslint-disable-next-line no-unused-vars
const quoteAPiUrl = "https://type.fit/api/quotes";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
  }

  componentDidMount() {
    try {
      fetch(quoteAPiUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then(result => {
          return result.json();
        })
        .then(data => {
          const firstQUote = data.shift();
          const quoteResult = firstQUote.text + " - " + firstQUote.author;
          this.setState({ quote: quoteResult });
        })
        .catch(error => console.error(error));
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { t } = this.props;
    const year = new Date().getFullYear();

    return (
      <StyleRoot>
        <div
          className="alert-alert-danger mt-5 text-center px-md-5"
          style={styles.bounce}
        >
          <h5>
            <div className="row" style={styles.introText}>
              <div className="col-4 col-md-2 my-auto">
                <img
                  class="ml-2 my-2 img-fluid img-thumbnail rounded-circle"
                  width={120}
                  height={120}
                  src={selfie}
                  alt="Alexandre abreu selfie"
                />
              </div>
              <div className="col-8 col-md-10 my-auto">
                {t("introInitial")} <b>Alexandre Abreu</b> {t("introEnd")}{" "}
                {t("introMore", { age: year - 1990 })}
                <span role="img" aria-label="coder">
                  👨🏼‍💻💻 ‍
                </span>
              </div>
            </div>
          </h5>
          <div>
            <AboutMe />
          </div>
          <div className="col-12 font-italic font-weight-lighter mt-5">
            <div className="my-4 py-5">
              <span> {this.state.quote} </span>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default withTranslation()(Welcome);
