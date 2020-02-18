import React, { Fragment } from 'react';
import AboutMe from './AboutMe';
import TechnicalSkills from './TechnicalSkills';
import ProjectList from './ProjectList';

const Main = () => {
    return (
        <Fragment>
            <AboutMe/>
            <TechnicalSkills/>
            <ProjectList/>
        </Fragment>
    );
};


export default Main;