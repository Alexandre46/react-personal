import React, { lazy, Component, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import { Accordion, Card } from 'react-bootstrap';

const PostOne = lazy(() => importMDX('../Blog/Post1.mdx'));
const PostTwo = lazy(() => importMDX('../Blog/laravel-api-models.mdx'));
const PostThree = lazy(() => importMDX('../Blog/coronavirus.mdx'));

//Styling
const themeMode = document.querySelector('html').getAttribute('data-theme');
const modeStyle = (themeMode === 'light') ? '' : '';

class Blog extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div className="text-warning">Loading...</div>}>
          
          <Accordion defaultActiveKey="0">
            <Card className={modeStyle}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Initial Post - Markdown
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <PostOne />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={modeStyle}>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Laravel Relationships
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body><PostTwo /></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={modeStyle}>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                COVID-19
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body><PostThree /></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </Suspense>
      </div>
    );
  }
}
export default Blog;