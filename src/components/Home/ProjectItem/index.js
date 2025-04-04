import React, { useRef, useEffect } from 'react';
import './style.css';

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { imgUrl, projectName, githubLink, projectUrl } = projectDetails;
  const imageRef = useRef(null);
  let observer = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');

          if (observer.current) {
            observer.current.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );

    const img = imageRef.current;
    if (img) observer.current.observe(img);

    return () => {
      if (img && observer.current) {
        observer.current.unobserve(img);
      }
    };
  }, []);

  return (
    <div className='project-item-container'>
      <div className="project-card" ref={imageRef}>
        <img
          src={imgUrl}
          alt="project"
          className="project-thumbnail"
        />
        <div className="project-links">
          <a href={githubLink}>
            <button className="action-button">
              <img
                src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
                alt="GitHub Logo"
                className="icon"
              />
              <p className="button-text">Code</p>
            </button>
          </a>
          <a href={projectUrl}>
            <button className="action-button">
              <img
                src="https://img.icons8.com/?size=100&id=CnopcGXLklkD&format=png&color=000000"
                alt="External Link"
                className="icon"
              />
              <p className="button-text">View</p>
            </button>
          </a>
        </div>
      </div>
      <p className='project-title'>{projectName}</p>
    </div>
  );
};

export default ProjectItem;
