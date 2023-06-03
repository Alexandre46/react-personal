// Router imports
import { HashRouter, Route, Routes } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { createBrowserHistory } from 'history';
import AboutMe from './AboutMe';
import Welcome from './welcome';
import MyProjects from './Projects';
import Contact from './contact';
import Resume from './Resume';
import CurriculumVitae from './CurriculumVitae';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Blog from './Blog';
import BlogDetails from './BlogDetails';

//Google reCaptcha v3
const siteKey = process.env.REACT_APP_SITE_KEY;

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const Navigation = () => {
  return (
    <HashRouter history={history} basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Welcome />} />
        <Route path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />} />
        <Route path={`${process.env.PUBLIC_URL}/blog/:blogId`} element={<BlogDetails />} />
        <Route path={`${process.env.PUBLIC_URL}/projects`} element={<MyProjects />} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} element={<Resume />} />
        <Route path={`${process.env.PUBLIC_URL}/cv`} element={<CurriculumVitae />} />
        <Route path={`${process.env.PUBLIC_URL}/about-me`} element={<AboutMe />} />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          element={
            <GoogleReCaptchaProvider reCaptchaKey={siteKey} language="PT-pt">
              <Contact />
            </GoogleReCaptchaProvider>
          }
        />
      </Routes>
    </HashRouter>
  );
};
export default withTranslation()(Navigation);
