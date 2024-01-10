
import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {
  const { projectId, imageUrl, title, description } = props;
  const linkId = `/project/${projectId}`;

  return (
    <div key={projectId} className="project-card">
      <div>
        <Link to={linkId}>
          <div >
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
