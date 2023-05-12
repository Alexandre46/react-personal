import React, { useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import CV from '../../src/cv.pdf';
import CVRedesign from '../../src/cv-redesign.pdf';
import CVNewest from '../../src/cv-atualizado-2023.pdf';
import { Col, Container, Row } from 'react-bootstrap';

const styles = {
  cvDocument: {
    width: '10rem'
  },
  alignCenter: {
    display: 'flex',
    justifyContent: 'center'
  }
};

const selectors = {
  newest: 'newest',
  resume: 'resume',
  complete: 'complete'
};

const CurriculumVitae = useMemo(() => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [cvSelected, setCvSelected] = React.useState(null);
  const [cvFile, setCvFile] = React.useState(null);

  onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  changePage = (offset) => setPageNumber((prevState) => prevState + offset);

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  showSpecificFile = (string) => {
    switch (string) {
      case selectors.newest:
        this.setState({ cvFile: CVNewest });
        break;
      case selectors.resume:
        this.setState({ cvFile: CVRedesign });
        break;
      case selectors.complete:
        this.setState({ cvFile: CV });
        break;
      default:
        this.setState({ cvFile: CV });
        break;
    }
  };

  changeCvSelected = (string) => {
    this.setState({ cvSelected: string });
    this.showSpecificFile(string);
  };

  const { t } = this.props;

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h5>{t('cv-select-option')}</h5>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs="auto">
          <button
            type="button"
            className={
              this.state.cvSelected === selectors.resume
                ? 'btn btn-primary active btn-outline-primary'
                : 'btn btn-light'
            }
            onClick={() => this.changeCvSelected(selectors.newest)}>
            {t('cv-newest')}
          </button>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            className={
              this.state.cvSelected === selectors.resume
                ? 'btn btn-primary active btn-outline-primary'
                : 'btn btn-primary'
            }
            onClick={() => this.changeCvSelected(selectors.resume)}>
            {t('cv-resume')}
          </button>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            className={
              this.state.cvSelected === selectors.complete
                ? 'btn btn-secondary active btn-outline-secondary'
                : 'btn btn-secondary'
            }
            onClick={() => this.changeCvSelected(selectors.complete)}>
            {t('cv-complete')}
          </button>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} className="d-none d-lg-block">
          <div className="col-12" style={styles.alignCenter}>
            <Document
              className={styles.cvDocument}
              file={this.state.cvFile}
              loading="Loading CV PDF..."
              onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={this.state.pageNumber} />
            </Document>
          </div>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} className="d-block d-lg-none text-center pt-2 pb-2">
          Preview Document <b>only on desktop</b>
        </Col>
        <Row>
          <Col xs={12} style={styles.alignCenter}>
            {t('cv-page')} {this.state.pageNumber || (this.state.numPages ? 1 : '--')} {t('cv-of')}{' '}
            {this.state.numPages || '--'}
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={styles.alignCenter}>
            <button type="button" disabled={this.state.pageNumber <= 1} onClick={this.previousPage}>
              {t('cv-previous')}
            </button>
            <button
              type="button"
              disabled={this.state.pageNumber >= this.state.numPages}
              onClick={this.nextPage}>
              {t('cv-next')}
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={styles.alignCenter}>
            <a href={this.state.cvFile} target="_blank" rel="noopener noreferrer" download>
              <button className="btn btn-info">
                <i className="fas fa-download" />
                {t('cv-download-cv')}
              </button>
            </a>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}, []);

export default withTranslation()(CurriculumVitae);
