import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfFile = "/Sahilresume.pdf";

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

  // 🔥 Force Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Sahil_Ahamad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container
      fluid
      className="resume-section"
      style={{ paddingTop: "120px", paddingBottom: "80px" }}
    >
      <Particle />

      {/* TOP DOWNLOAD BUTTON */}
      <Row className="justify-content-center mb-4">
        <Button
          variant="primary"
          onClick={handleDownload}
          className="resume-download-btn"
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>

      {/* PDF PREVIEW */}
      <Row className="justify-content-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading Resume..."
            onLoadError={(error) =>
              console.error("Error loading PDF:", error)
            }
          >
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.2 : 0.6}
                />
              ))}
          </Document>
        </div>
      </Row>

      {/* BOTTOM DOWNLOAD BUTTON */}
      <Row className="justify-content-center mt-4">
        <Button
          variant="primary"
          onClick={handleDownload}
          className="resume-download-btn"
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;