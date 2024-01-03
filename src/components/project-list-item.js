import React from 'react';

const ProjectListItem = ({ project }) => {
  const { title, description, technologies, readMoreLink } = project;

  return (
    <a href={readMoreLink}>
      <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p>{description}</p>

          <div className="technology-pills">
            {technologies.map((tech, index) => (
              <span key={index} className="technology-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
  );
};

export default ProjectListItem;