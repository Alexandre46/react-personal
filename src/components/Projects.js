import React, { Component } from "react";
import { Button } from "react-bootstrap";
import truncate from "./utils/common";

const styles = {
  cardBox: {
    width: "100%",
    height: "100%",
  },
  cardImg: {
    opacity: 0.2,
    width: "100%",
    minHeight: "50vh",
  },
  cardTitle: {
    color: "grey",
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
      <div className=" bg-dark text-white" style={styles.cardBox}>
        <img
          className="card-img"
          src={bgimage}
          alt="Project art"
          style={styles.cardImg}
        />
        <div className="card-img-overlay">
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
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Button className="btn-info btn-block">
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
            </Button>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Button className="btn-info btn-block">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639788800/personal%20website/cinforme-img.png"
                }
                projectname={"Vue Weather SPA"}
                projectstack={"VueJS / DarkSky API / Axios"}
                projectinfo={
                  "Vue Weather Single Page Application to show city background image, weekly forecast for geolocation of user"
                }
                projectrepo={"https://github.com/Alexandre46/vue-node-weather"}
              />
            </Button>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Button className="btn-info btn-block">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639788800/personal%20website/cinforme-img.png"
                }
                projectname={"React personal site"}
                projectstack={
                  "React / React-router / React-boostrap & animations (css)"
                }
                projectinfo={
                  "Personal site/blog just to develop react knowledge "
                }
                projectrepo={"https://github.com/Alexandre46/react-personal"}
              />
            </Button>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Button className="btn-info btn-block">
              <this.projectCard
                bgimage={
                  "https://res.cloudinary.com/cinforme/image/upload/v1639788800/personal%20website/cinforme-img.png"
                }
                projectname={"React Native HCCP"}
                projectstack={
                  "React Native / React Navigation / React Bootstrap"
                }
                projectinfo={
                  "Mobile application to know a bit of Android / iOS apps building a simple app to pick photos / manage on CMS backend and navigate through some screens to see multiple media assets"
                }
                projectrepo={"https://github.com/Alexandre46/react-personal"}
              />
            </Button>
          </div>
        </div>
      </>
    );
  }
}
