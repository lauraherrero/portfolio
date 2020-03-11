import React from 'react';
import myPhoto from "../images/myPhoto.jpeg";

const AboutMe = () => {
    return (
    <div>
        <div className="aboutme" id="aboutMe">
            <img className="aboutme__photo" 
                    src={myPhoto}
                    alt="Laura Herrero"/>
            <div className="aboutme__content">
                <h3 className="aboutme__content--title">Un poco sobre mí...</h3>
                <p className="aboutme__content--text">Tras liderar los equipos de atención al cliente de Telepizza, fui consciente de la importancia de valorar y cuidar la marca de una empresa y su producto. Mi curiosidad me llevó a querer aprender más y descubrí la programación a través de Codecademy.</p>
                <p className="aboutme__content--text"> Más adelante, decidí formarme como programadora front-end en Adalab, especializándome en JavaScript (ES6) y React, aplicando metodologías ágiles dentro del marco de trabajo Scrum.</p> 
                <p className="aboutme__content--text">El trabajo en equipo es uno de mis puntos fuertes, reforzado por la organización, adaptabilidad y comunicación.</p>
            </div>
        </div>
    </div>
    )
}


export default AboutMe;