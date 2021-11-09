
import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route    
} from 'react-router-dom';
import { HomePage } from '../components/homepage/HomePage';
import { NavbarComponent } from '../components/ui/NavbarComponent';

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div>
                <Switch>
                    <Route exac path="/" element={<HomePage />} />
                    <Route exac path="/projects" element={<HomePage />} />
                    <Route exac path="/about" element={<HomePage />} />
                    <Route component={HomePage} />
                </Switch>
            </div>

        </Router>
    )
}

