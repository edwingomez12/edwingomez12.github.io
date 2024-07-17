import React from 'react';
import './Projects.css'; // Make sure you have your CSS file set up for styling

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>Experience</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>IBM (2019-2021)</h3>
            <h4>Application Developer</h4>
            <p>Worked as a consultant on an AT&T project. Used Java/Oracle to help the business place service orders for new government locations.</p>
          </div>
          <div className="project-item">
            <h3>GM Financial (2021-)</h3>
            <h4>Software Engineer</h4>
            <p>Worked on the credit team to help migrate on-premises applications to the cloud in Azure. Used .NET framework to build Azure functions to facilitate credit application processing from dealerships.</p>
          </div>
        </div>
        <div className="certifications">
          <h2>Certifications</h2>
          <div className="badges">
            <img src={`${process.env.PUBLIC_URL}/az204.png`} alt="Certification 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
