import React, { Component } from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { withTranslation } from "react-i18next";

const styles = {
  container: {
    animation: "x 0.1s",
    animationName: Radium.keyframes(bounce, "bounce"),
    textAlign: "justify",
  },
};

class AboutMe extends Component {
  render() {
    const { t } = this.props;
    return (
      <StyleRoot>
        <div className="test my-4" style={styles.container}>
          {t("aboutMeInfo")}
        </div>
      </StyleRoot>
    );
  }
}

export default withTranslation()(AboutMe);
