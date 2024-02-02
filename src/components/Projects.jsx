import React from 'react';
import truncate from './utils/common';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    marginTop: '5rem'
  },
  projectElement: {
    ':hover': { transform: 'scale(1.1)' }
  },
  cardBox: {
    width: '100%',
    height: '50vh'
  },
  cardImg: {
    opacity: 0.2,
    width: '100%',
    height: '25vh'
  },
  cardTitle: {
    color: 'white'
  },
  cardEntry: {
    left: '10px',
    right: '10px'
  }
};

const ProjectCard = ({ bgimage, projectname, projectstack, projectinfo, projectrepo }) => {
  return (
    <div className="bg-dark text-white projectElement" style={styles.cardBox}>
      <img className="card-img" src={bgimage} alt="Project art" style={styles.cardImg} />
      <div style={styles.cardEntry}>
        <h5 className="card-title h3" style={styles.cardTitle}>
          {projectname}
        </h5>
        <small className="card-text font-weight-bold h6">{projectstack}</small>
        <p className="card-text mt-4">{truncate(projectinfo)}</p>
        <a href={projectrepo}>
          <span role="img" aria-label="Github emoji">
            🔗
          </span>{' '}
          {projectname} repository{' '}
        </a>
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Side Projects</h1>
        </div>
      </div>
      <div className="row" style={styles.root}>
        <div className="col-12 col-md-6 col-lg-4" style={styles.item}>
          <div className="btn-info btn-block border">
            <ProjectCard
              bgimage="https://res.cloudinary.com/cinforme/image/upload/v1651100683/personal%20website/Screenshot_2022-04-28_at_00.03.53.png"
              projectname="CINFORME V2"
              projectstack="NextJS / MongoDB / NodeJS / MaterialUI 5"
              projectinfo="Complete refactor of news platform CINFORME using Javascript tech for all stack)"
              projectrepo="https://github.com/Alexandre46/cinforme-version-2"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4" style={styles.item}>
          <div className="btn-info btn-block border">
            <ProjectCard
              bgimage="https://res.cloudinary.com/cinforme/image/upload/v1639788800/personal%20website/cinforme-img.png"
              projectname="CINFORME"
              projectstack="Laravel / Vanilla JS / Bootstrap4"
              projectinfo="News platform, with an backoffice to insert news and also an news aggregator, using google translator API to store all content in two languages(english and portuguese)"
              projectrepo="https://github.com/Alexandre46/CINFORME"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4" style={styles.item}>
          <div className="btn-info btn-block border">
            <ProjectCard
              bgimage="https://res.cloudinary.com/cinforme/image/upload/v1639863220/personal%20website/vue-weather-app.png"
              projectname="Weather SPA"
              projectstack="VueJS / DarkSky API / Axios"
              projectinfo="Vue Weather Single Page Application to show city background image, weekly forecast for geolocation of user"
              projectrepo="https://github.com/Alexandre46/vue-node-weather"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4" style={styles.item}>
          <div className="btn-info btn-block border">
            <ProjectCard
              bgimage="https://res.cloudinary.com/cinforme/image/upload/v1639864041/personal%20website/website.png"
              projectname="Portfolio"
              projectstack="React / React-router / React-boostrap & animations (css)"
              projectinfo="Personal site/blog just to develop react knowledge "
              projectrepo="https://github.com/Alexandre46/react-personal"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4" style={styles.item}>
          <div className="btn-info btn-block border">
            <ProjectCard
              bgimage="https://res.cloudinary.com/cinforme/image/upload/v1639863912/personal%20website/hccp.png"
              projectname="HCCP Mobile App"
              projectstack="React Native / React Navigation / React Bootstrap"
              projectinfo="Mobile application to know a bit of Android / iOS apps building a simple app to pick photos / manage on CMS backend and navigate through some screens to see multiple media assets"
              projectrepo="https://github.com/Alexandre46/react-personal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;