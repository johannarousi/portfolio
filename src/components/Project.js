import React from "react";

const Project = props => {
  const {
    name,
    style,
    handleMouseOver,
    handleMouseLeave,
    isHovering,
    link
  } = props;
  return (
    <div
      style={style}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="finlary project-div"
    >
      {{ isHovering } && (
        <div className="hover-project">
          <h2>{name}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
