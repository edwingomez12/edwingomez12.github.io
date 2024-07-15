import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>Experience</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>IBM 2019-2021</h3>
            <h4>Application Developer</h4>
            <p>Worked as a consultant on a AT&T project. Used Java/Oracle to help 
              the business place service orders for new government locations
            </p>
          </div>
          <div className="project-item">
            <h3>GM Financial 2021-</h3>
            <h4>Software Engineer</h4>
            <p>Worked on the credit team to help migrate on prem applications to cloud in Azure. 
              Used DotNet framework to help build azure functions to help business receive credit applications from
              dealerships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
