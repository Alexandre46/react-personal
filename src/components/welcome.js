import React, { Component } from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { withTranslation } from "react-i18next";
import selfie from "../assets/images/selfie.jpg";

const styles = {
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};

class Welcome extends Component {
  render() {
    const { t } = this.props;
    const year = new Date().getFullYear();

    return (
      <StyleRoot>
        <div
          className="alert-alert-danger mt-5 text-center"
          style={styles.bounce}
        >
          <h4>
            {t("introInitial")} <b>Alexandre Abreu</b>
            <img
              class="ml-4 my-2 img-fluid img-thumbnail rounded-circle"
              width={200}
              height={200}
              src={selfie}
              alt="Alexandre abreu selfie"
            />
            <br />
            {t("introEnd")}
            <br />
            <span role="img" aria-label="coder">
              👨🏼‍💻💻 ‍
            </span>
          </h4>
          <div className="col-12 font-italic font-weight-lighter mt-5">
            {t("introMore", { age: year - 1990 })}
            <br />
            <br />

            <h5> {t("introSentence")}</h5>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default withTranslation()(Welcome);
