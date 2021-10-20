import { Link } from '@react-pdf/renderer';
import React, { useState, Component } from 'react';
import { Document, Page } from 'react-pdf';
import CV from '../cv.pdf';

export default function CurriculumVitae() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

  return (
      
    <div className="d-flex justify-content-center py-4 my-4">
        <div className="row">
        <div className="col-12 offset-2">
                    <Document
                    file={CV}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                </div>
            <div className="col-12 offset-2">
                <div className="col-6 pt-2 mx-auto">
                    <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                    </p>
                    <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                    </button>
                    <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                    Next
                    </button>
                </div>  
                
                <div className="col-6 pt-2 mx-auto">
                    <a href={CV} target="_blank" rel="noopener noreferrer" download>
                        <button className="btn btn-info">
                            <i className="fas fa-download"/>
                            Download File
                        </button>
                    </a>
                </div>
                

            </div>
      </div>
    </div>
  );
}
