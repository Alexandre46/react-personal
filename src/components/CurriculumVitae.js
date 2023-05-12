import React, { useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import CV from '../../src/cv.pdf';
import CVRedesign from '../../src/cv-redesign.pdf';
import CVNewest from '../../src/cv-atualizado-2023.pdf';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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

const CurriculumVitae = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [cvSelected, setCvSelected] = React.useState(selectors.newest);
  const [cvFile, setCvFile] = React.useState(CVNewest);

  const { t } = useTranslation();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => setPageNumber((prevState) => prevState + offset);

  const previousPage = () => changePage(-1);

  const nextPage = () => changePage(1);

  const showSpecificFile = (string) => {
    switch (string) {
      case selectors.newest:
        setCvFile(CVNewest);
        break;
      case selectors.resume:
        setCvFile(CVRedesign);
        break;
      case selectors.complete:
        setCvFile(CV);
        break;
      default:
        setCvFile(CV);
        break;
    }
  };

  const changeCvSelected = (string) => {
    setCvSelected(string);
    showSpecificFile(string);
  };

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
              cvSelected === selectors.resume
                ? 'btn btn-primary active btn-outline-primary'
                : 'btn btn-light'
            }
            onClick={() => changeCvSelected(selectors.newest)}>
            {t('cv-newest')}
          </button>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            className={
              cvSelected === selectors.resume
                ? 'btn btn-primary active btn-outline-primary'
                : 'btn btn-primary'
            }
            onClick={() => changeCvSelected(selectors.resume)}>
            {t('cv-resume')}
          </button>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            className={
              cvSelected === selectors.complete
                ? 'btn btn-secondary active btn-outline-secondary'
                : 'btn btn-secondary'
            }
            onClick={() => changeCvSelected(selectors.complete)}>
            {t('cv-complete')}
          </button>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} className="d-none d-lg-block">
          <div className="col-12" style={styles.alignCenter}>
            <Document
              className={styles.cvDocument}
              file={cvFile}
              loading="Loading CV PDF..."
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
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
            {t('cv-page')} {pageNumber || (numPages ? 1 : '--')} {t('cv-of')} {numPages || '--'}
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={styles.alignCenter}>
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
              {t('cv-previous')}
            </button>
            <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
              {t('cv-next')}
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={styles.alignCenter}>
            <a href={cvFile} target="_blank" rel="noopener noreferrer" download>
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
};

export default withTranslation()(CurriculumVitae);
