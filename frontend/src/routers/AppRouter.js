
import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route    
} from 'react-router-dom';
import { AboutPage } from '../components/aboutpage/AboutPage';
import { HomePage } from '../components/homepage/HomePage';
import { ProjectsPage } from '../components/projectspage/ProjectsPage';
import { NavbarComponent } from '../components/ui/NavbarComponent';

import 'animate.css';

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div className="container mt-0 mt-md-5 ">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/about" component={AboutPage} />
                </Switch>
            </div>

        </Router>
    )
}

