import React from 'react';
import {Route,Switch} from 'react-router-dom' ;
import LandingPage from './LandingPage';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import Projects from './Projects';

const Main = ()=>(
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/aboutme" component={AboutMe}></Route>
        <Route exact path="/contacts" component={Contacts}></Route>
       

    </Switch>
) 
export default Main;