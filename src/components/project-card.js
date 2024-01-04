import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, readMoreLink, backupLink } = project;
  const linkToUse = readMoreLink || backupLink;
  return (
    <a href={readMoreLink}>
      <div className="project-card">
        <div className="project-image">
          <img src={require(`../images/${image}`).default} alt={title}/>
        </div>
        <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p>{description}</p>
          <a href={linkToUse}>
            <div>
              <span className= "read-more-link">{readMoreLink ? 'Read More' : 'Available Upon Request'}</span>
            </div>
          </a>
          <br/>
          <div className="technology-pills">
            {technologies.map((tech, index) => (
              <span key={index} className="technology-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
