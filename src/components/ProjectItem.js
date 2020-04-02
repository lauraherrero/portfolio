import React from 'react';

const ProjectItem = props => {
    return (
        <article className="item__wrapper" key={props.id}>
            <img className="item__wrapper--img" src={props.img} alt={props.name}/>
            <div className="item__content">
                <a className="item__wrapper--link" href={props.urlDemo} key={props.id} target="_blank" rel="noopener noreferrer">
                    <h4 className="item__wrapper--name">{props.name}</h4>
                </a>
                <p className="item__wrapper--description">{props.description}</p>
                <div className="item__wrapper--btn">
                    <a href={props.urlDemo} target="_blank" rel="noopener noreferrer" className="item__wrapper--link"><span className="item__wrapper--text">Ver Demo</span></a>
                    <a href={props.urlCode} target="_blank" rel="noopener noreferrer" className="item__wrapper--link"><span className="item__wrapper--text">Ver Código</span></a>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem;