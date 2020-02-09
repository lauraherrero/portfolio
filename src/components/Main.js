import React, { Fragment } from 'react';
import AboutMe from './AboutMe';
import TechnicalSkills from './TechnicalSkills';

const Main = () => {
    return (
        <Fragment>
            <AboutMe/>
            <TechnicalSkills/>
            {/* <Projects/>
            <Contact/> */}
        </Fragment>
    );
};


export default Main;