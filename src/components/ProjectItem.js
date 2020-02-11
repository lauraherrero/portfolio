import React from 'react';

const ProjectItem = props => {
    return (
        <article key={props.id}>
            <a href={props.url} key={props.id} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt={props.name}/>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </a>
        </article>
    )
}

export default ProjectItem;