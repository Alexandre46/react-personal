import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { withTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

class Resume extends Component {
  render() {
    const { t } = this.props;
    const newestTechSummary = t("resume-newest-tech-summary", {
      returnObjects: true,
    });
    const firstTechSummary = t("resume-first-tech-summary", {
      returnObjects: true,
    });
    const secondTechSummary = t("resume-second-tech-summary", {
      returnObjects: true,
    });

    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work yacooba-container"
          contentStyle={{ background: "#41c337", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - present"
          iconStyle={{ background: "#fff", color: "#fff" }}
          iconClassName="yacooba-icon"
        >
          <h2 className="vertical-timeline-element-title">
            {" "}
            {t("resume-newest-title")}{" "}
          </h2>

          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            {t("resume-newest-subtitle")}{" "}
          </h4>
          <p>{t("resume-newest-text")}</p>
          <p>
            {newestTechSummary.map(item => {
              return <span className="badge badge-dark px-1 mx-1">{item}</span>;
            })}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work nearsoft-container"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2018 - 2022"
          iconStyle={{ background: "#fff", color: "#fff" }}
          iconClassName="nearsoft-icon"
        >
          <h2 className="vertical-timeline-element-title">
            {" "}
            {t("resume-first-title")}{" "}
          </h2>

          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            {t("resume-first-subtitle")}{" "}
          </h4>
          <p>{t("resume-first-text")}</p>
          <p>
            {firstTechSummary.map(item => {
              return <span className="badge badge-dark px-1 mx-1">{item}</span>;
            })}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work tv-app-container"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          date="2016 - 2018"
          iconStyle={{ background: "#fff", color: "#fff" }}
          iconClassName="tv-app-icon"
        >
          <h2 className="vertical-timeline-element-title">
            {t("resume-second-title")}{" "}
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            {t("resume-second-subtitle")}
          </h4>
          <p>{t("resume-second-text")}</p>
          <p>
            {secondTechSummary.map(item => {
              return <span className="badge badge-dark px-1 mx-1">{item}</span>;
            })}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work uma-container"
          contentStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          date="2016 - 2018"
          iconStyle={{ background: "#fff", color: "#fff" }}
          iconClassName="uma-icon"
        >
          <h2 className="vertical-timeline-element-title">
            {t("resume-third-title")}{" "}
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            {t("resume-third-subtitle")}
          </h4>
          <p>{t("resume-third-text")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}

export default withTranslation()(Resume);
