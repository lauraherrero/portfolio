import React from 'react';
import hardSkills from '../data/hardSkills';

const TechnicalSkills = () => {
    return (
        <section className="skills__wrapper">
            <h2 className="skills__wrapper--title">Skills</h2>
            <ul className="skills__wrapper--list">
                {hardSkills.map(item => {
                    return (
                        <li className="skills__wrapper--item" key={item.id}>
                            {item.name}
                            <img className="skills__wrapper--logo" src={item.img} alt={`Logo de ${item.name}`} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}


export default TechnicalSkills;