import React from 'react';
import projectsData from '../data/projectsData';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    return (
        <section>
            <h2>Proyectos</h2>
            <ul>
                {projectsData
                    .map(project => {
                        return (
                            <li key={project.id}>
                                <ProjectItem    
                                    img={project.img}
                                    name={project.name}
                                    description={project.description}
                                    url={project.url}
                                />
                            </li>
                        );
                    })}
            </ul>
        </section>
    )
}




export default ProjectList;