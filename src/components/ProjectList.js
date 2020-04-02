import React from 'react';
import projectsData from '../data/projectsData';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    return (
        <section className="list__wrapper" id="projectList">
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
                                    urlDemo={project.urlDemo}
                                    urlCode={project.urlCode}
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