import React from 'react';
import myPhoto from "../images/myPhoto.jpg";

const Hero = () => {
    return (
        <section>
            <img className="hero__photo" 
                src={myPhoto}
                alt="Laura Herrero"/>
            <div className="hero__wrapper">
                <h1 className="hero__title">Laura Herrero</h1>
                <div className="hero__bar" />
                <h2 className="hero__position">Front-end developer</h2>
            </div>
        </section>
    );
};


export default Hero;