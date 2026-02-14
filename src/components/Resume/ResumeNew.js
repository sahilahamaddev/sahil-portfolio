import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf = process.env.PUBLIC_URL + "/Sahilresume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ paddingTop: "120px" }}>
        <Particle />

        {/* Top Button */}
        <Row className="justify-content-center mb-4">
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* PDF Centered Properly */}
        <Row className="justify-content-center">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error(error)}
              loading="Loading Resume..."
            >
              {numPages &&
                Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={width > 786 ? 1.2 : 0.6}
                  />
                ))}
            </Document>
          </div>
        </Row>

        {/* Bottom Button */}
        <Row className="justify-content-center mt-4">
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;