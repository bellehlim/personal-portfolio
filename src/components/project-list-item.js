import React from 'react';

const ProjectListItem = ({ project }) => {
  const { title, description, image, technologies, readMoreLink } = project;

  return (
    <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="technology-pills">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-pill">
              {tech}
            </span>
          ))}
        </div>
        {/* <div className="buttons">
          <a href={readMoreLink} target="#" rel="noopener noreferrer">
            Read More
          </a>
        </div> */}
      </div>
  );
};

export default ProjectListItem;