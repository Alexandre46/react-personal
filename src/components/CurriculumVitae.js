import React from "react";
import { withTranslation } from "react-i18next";
import { Document, Page } from "react-pdf";
import CV from "../cv.pdf";
import CVRedesign from "../cv-redesign.pdf";

const selectors = {
    resume: "resume",
    complete: "complete"
}

class CurriculumVitae extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            cvSelected: null,
            cvFile: null
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({numPages: numPages});
        this.setState({pageNumber: 1});
    }

    changePage = (offset) => this.setState({pageNumber: (this.state.pageNumber + offset)});

    previousPage = () => this.changePage(-1);
  
    nextPage = () => this.changePage(1);

    showSpecificFile = (string) => {
          switch(string) {
              case selectors.resume:
                this.setState({cvFile: CVRedesign})
                break;
              case selectors.complete:
                this.setState({cvFile: CV})
                break;
              default:
                this.setState({cvFile: CV})
                break;
          }
        
    }

    changeCvSelected = (string) => {
        this.setState({cvSelected: string});
        this.showSpecificFile(string);
    }
    

  render () {
    const { t } = this.props;
    
    return (
        
        <div className="d-flex justify-content-center py-4 my-4">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h5>{t("cv-select-option")}</h5>
              </div>
              <div className="col-12 col-sm-6">
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={ () => this.changeCvSelected(selectors.resume)}
                >
                  {t("cv-resume")}
                </button>
              </div>
              <div className="col-12 col-sm-6">
                <button 
                    type="button" 
                    className="btn btn-outline-primary"
                    onClick={ () => this.changeCvSelected(selectors.complete)}
                >
                  {t("cv-complete")}
                </button>
              </div>
            </div>

            <div className={this.state.cvSelected ? "row mt-3" : "row mt-3 d-none"}>
                <div className="col-12 offset-2">
                    <Document
                        file={this.state.cvFile}
                        options={{ workerSrc: "/pdf.worker.js" }}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={this.state.pageNumber} />
                    </Document>
                </div>
    
                <div className="col-12 offset-2">
                    <div className="col-6 pt-2 mx-auto">
                        <p>
                            {t("cv-page")} {this.state.pageNumber || (this.state.numPages ? 1 : "--")} {t("cv-of")}{" "}
                            {this.state.numPages || "--"}
                        </p>
                        <button
                            type="button"
                            disabled={this.state.pageNumber <= 1}
                            onClick={this.previousPage}
                        >
                            {t("cv-previous")}
                        </button>
                        <button
                            type="button"
                            disabled={this.state.pageNumber >= this.state.numPages}
                            onClick={this.nextPage}
                        >
                            {t("cv-next")}
                        </button>
                    </div>
    
                    <div className="col-6 pt-2 mx-auto">
                        <a href={this.state.cvFile} target="_blank" rel="noopener noreferrer" download>
                            <button className="btn btn-info">
                            <i className="fas fa-download" />
                            {t("cv-download-cv")}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
    )
  }
}


export default withTranslation()(CurriculumVitae)
