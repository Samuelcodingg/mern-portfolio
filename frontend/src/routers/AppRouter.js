
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
import { Footer } from '../components/ui/Footer';
import { ProjectPage } from '../components/projectpage/ProjectPage';
import { CvPage } from '../components/cvpage/CvPage';

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/projects/:id" component={ProjectPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/cv" component={CvPage} />
                </Switch>
            </div>

            <Footer />
        </Router>
    )
}

