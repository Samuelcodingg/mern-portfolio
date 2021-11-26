
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

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div className="container mt-0 mt-md-5 ">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/projects/:id" component={ProjectPage} />
                    <Route exact path="/about" component={AboutPage} />
                </Switch>
            </div>

            <Footer />
        </Router>
    )
}

