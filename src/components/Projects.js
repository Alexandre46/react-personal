import React , { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class MyProjects extends Component {
    render() {
        return (
            <div class="mt-3">
            <Button className="btn-info btn-block">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">CINFORME</h5>
                <small>Laravel / Vanilla JS / Bootstrap4</small>
              </div>
              <p class="mb-1">News platform, with an backoffice to insert news and also an news aggregator, using google translator API to store all content in two languages(english and portuguese)</p>
              <small><a class="text-decoration-none text-dark" href="https://github.com/Alexandre46/CINFORME">🔗 https://github.com/Alexandre46/CINFORME</a></small>
            </Button>
            <Button className="btn-secondary btn-block">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Vue Weather SPA</h5>
                <small>VueJS / DarkSky API / Axios</small>
              </div>
              <p class="mb-1">Vue Weather Single Page Application to show city background image , weekly forecast for geolocation of user</p>
              <small class="text-muted"><a class="btn-secondary" href="https://github.com/Alexandre46/vue-node-weather">🔗 https://github.com/Alexandre46/vue-node-weather</a></small>
            </Button>
            <Button className="btn-block">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">React personal site</h5>
                <small>React / React-router / React-boostrap & animations (css)</small>
              </div>
              <p class="mb-1">Personal site/blog just to develop react knowledge</p>
              <small class="text-muted"><a class="btn-secondary" href="https://github.com/Alexandre46/react-personal">🔗 https://github.com/Alexandre46/react-personal</a></small>
            </Button>
            <Button className="btn-warning btn-block">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">React Native HCCP</h5>
                <small>React Native / React Navigation / React Bootstrap /</small>
              </div>
              <p class="mb-1">Mobile application to know a bit of Android / iOS apps building a simple app to pick photos / manage on CMS backend and navigate through some screens to see multiple media assets</p>
              <small class="text-muted"><a class="btn-secondary" href="https://github.com/Alexandre46/react-personal">🔗 https://github.com/Alexandre46/react-personal</a></small>
            </Button>
           </div>
        )
    }
}