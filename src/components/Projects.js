import React, { Component } from "react";
import truncate from "./utils/common";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    marginTop: "5rem",
  },
  projectElement: {
    ":hover": { transform: "scale(1.1)" },
  },
  cardBox: {
    width: "100%",
    height: "100%",
  },
  cardImg: {
    opacity: 0.2,
    width: "100%",
    height: "50vh",
  },
  cardTitle: {
    color: "white",
  },
};

export default class MyProjects extends Component {
  projectCard({
    bgimage,
    projectname,
    projectstack,
    projectinfo,
    projectrepo,
  }) {
    return (
      <div className="bg-dark text-white projectElement" style={styles.cardBox}>
        <img
          className="card-img"
          src={bgimage}
          alt="Project art"
          style={styles.cardImg}
        />
        <div className="card-img-overlay" style={styles.item}>
          <h5 className="card-title" style={styles.cardTitle}>
            {projectname}
          </h5>
          <small className="card-text">{projectstack}</small>
          <p className="card-text">{truncate(projectinfo)}</p>
          <a href={projectrepo}>
            <span role="img" aria-label="Github emoji">
              🔗
            </span>{" "}
            {projectname} repository{" "}
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="row" style={styles.root}>
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            style={styles.item}
          >
            <div className="btn-info btn-block border">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639788800/personal%20website/cinforme-img.png"
                }
                projectname={"CINFORME"}
                projectstack={"Laravel / Vanilla JS / Bootstrap4"}
                projectinfo={
                  "News platform, with an backoffice to insert news and also an news aggregator, using google translator API to store all content in two languages(english and portuguese)"
                }
                projectrepo={"https://github.com/Alexandre46/CINFORME"}
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            style={styles.item}
          >
            <div className="btn-info btn-block border">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639863220/personal%20website/vue-weather-app.png"
                }
                projectname={"Weather Web app"}
                projectstack={"VueJS / DarkSky API / Axios"}
                projectinfo={
                  "Vue Weather Single Page Application to show city background image, weekly forecast for geolocation of user"
                }
                projectrepo={"https://github.com/Alexandre46/vue-node-weather"}
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            style={styles.item}
          >
            <div className="btn-info btn-block border">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639864041/personal%20website/website.png"
                }
                projectname={"My website/portfolio"}
                projectstack={
                  "React / React-router / React-boostrap & animations (css)"
                }
                projectinfo={
                  "Personal site/blog just to develop react knowledge "
                }
                projectrepo={"https://github.com/Alexandre46/react-personal"}
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            style={styles.item}
          >
            <div className="btn-info btn-block border">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639863912/personal%20website/hccp.png"
                }
                projectname={"HCCP Mobile app"}
                projectstack={
                  "React Native / React Navigation / React Bootstrap"
                }
                projectinfo={
                  "Mobile application to know a bit of Android / iOS apps building a simple app to pick photos / manage on CMS backend and navigate through some screens to see multiple media assets"
                }
                projectrepo={"https://github.com/Alexandre46/react-personal"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
