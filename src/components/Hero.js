import React from 'react';
import myPhoto from "../images/myPhoto.jpg";

const Hero = () => {
    return (
        <section>
            <img className="Hero__photo" 
                src={myPhoto}
                alt="Laura Herrero"/>
            <div className="Hero__wrapper">
                <h1 className="Hero__title">Laura Herrero</h1>
                <div className="Hero__bar" />
                <h2 className="Hero__position">Front-end developer</h2>
            </div>
        </section>
    );
};


export default Hero;