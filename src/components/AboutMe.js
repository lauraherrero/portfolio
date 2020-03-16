import React from 'react';
import myPhoto from "../images/myPhoto.jpeg";
import CV from "../images/CV_LauraHerrero.pdf";

const AboutMe = () => {
    return (
    <div>
        <div className="aboutme" id="aboutMe">
            <img className="aboutme__photo" 
                    src={myPhoto}
                    alt="Laura Herrero"/>
            <div className="aboutme__content">
                <h3 className="aboutme__content--title">Un poco sobre mí...</h3>
                <p className="aboutme__content--text">Tras liderar los equipos de atención al cliente de Telepizza, fui consciente de la importancia de valorar y cuidar la marca de una empresa y su producto. Mi curiosidad me llevó a querer aprender más sobre procesos, automatización de tareas y finalmente la programación, aquí fue cuando descubrí Codecademy.</p>
                <p className="aboutme__content--text">Más adelante trabajando en Teleperformance fue consciente de que quería dar un giro a mi trayectoria profesional y convertirme en programadora, lo cual me llevó a formarme como programadora front-end especializandome en JavaScript (ES6) y la librería React. Además, durante mi formación, he trabajado aplicando metodologías ágiles dentro del marco de trabajo Scrum.</p> 
                <p className="aboutme__content--text">El trabajo en equipo es una de mis mejores cualidades, la cual he ido desarrollando y mejorando en cada puesto de mi carrera profesional. De manera complementaria, la organización, adaptabilidad y comunicación constituyen mis puntos fuertes.</p>
                <a href={CV} target="_blank" rel="noopener noreferrer" className="aboutme__content--link"><span className="aboutme__content--cv">Ver CV</span></a>
            </div>
        </div>
    </div>
    )
}


export default AboutMe;