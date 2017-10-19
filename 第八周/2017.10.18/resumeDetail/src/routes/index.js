import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from '../layouts/App';
import Home from '../containers/Home';
import Project from '../containers/Project';
import Skill from '../containers/Skill';
import About from '../containers/About';
import Contact from '../containers/Contact';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="project" component={Project}/>
            <Route path="skill" component={Skill}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
)