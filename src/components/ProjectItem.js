import React from 'react';

const ProjectItem = props => {
    return (
        <article className="item__wrapper" key={props.id}>
            <a className="item__wrapper--link" href={props.url} target="_blank" rel="noopener noreferrer"><img className="item__wrapper--img" src={props.img} alt={props.name}/>
                <span className="item__wrapper--span"><p>Ver demo</p></span>
            </a>
            <div className="item__content">
                <a className="item__wrapper--link" href={props.url} key={props.id} target="_blank" rel="noopener noreferrer">
                    <h4 className="item__wrapper--name">{props.name}</h4>
                </a>
                <p className="item__wrapper--description">{props.description}</p>
            </div>
        </article>
    )
}

export default ProjectItem;