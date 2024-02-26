import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import webscraper  from "../../Assets/Projects/webscraping.png";
import Autocad  from "../../Assets/Projects/Autocad.png";
import healthcare  from "../../Assets/Projects/healthcare.png";
import weather  from "../../Assets/Projects/weather.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraper}
              isBlog={false}
              title="Web Scraper"
              description="Robust web scraping tool enabling users to effortlessly extract targeted data from websites by providing URL and keyword inputs, offering a seamless and customizable data retrieval experience."
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Autocad}
              isBlog={false}
              title="Co-Pilot for Autodesk Software’s"
              description="As an integral part of the team, I played a role in the groundbreaking integration of ChatGPT with Autodesk’s suite of tools, such as AutoCAD, Fusion 360, Inventor, Revit, and iTwin, transforming tool interaction andaccessibility through cutting-edge AI technology."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 82.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="AI Health Care Application"
              description=" Developed a disease detection system capable of identifying five diseases: heart disease, pneumonia, malaria, liver disease, and diabetes detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Developed a weather application that enhances user experience by caching weather data in Redux-store and session storage, reducing network dependency, and enabling real-time weather updates by city name or automatic location detection."
            />
          </Col>

      

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col> */}

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
