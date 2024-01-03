import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, readMoreLink } = project;
  return (
    <a href={readMoreLink}>
      <div className="project-card">
        <div className="project-image">
          <img src={require(`../images/${image}`).default} alt={title}/>
        </div>
        <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p>{description}</p>
          {/* <div className="technology-pills">
            {technologies.map((tech, index) => (
              <span key={index} className="technology-pill">
                {tech}
              </span>
            ))}
          </div> */}
          {/* <a class ="blue-link" href={readMoreLink}>Read More</a> */}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
