import React from 'react';
import projectsData from '../data/projectsData';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    return (
        <section className="list__wrapper">
            <h2 className="list__wrapper--title">Proyectos</h2>
            <ul className="list__wrapper--container">
                {projectsData
                    .map(project => {
                        return (
                            <li className="list__wrapper--content" key={project.id}>
                                <ProjectItem    
                                    img={project.img}
                                    name={project.name}
                                    description={project.description}
                                    url={project.url}
                                />
                                <div className="item__bar" />
                            </li>
                        );
                    })}
            </ul>
        </section>
    )
}




export default ProjectList;