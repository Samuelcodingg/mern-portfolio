
import React from 'react';
import { 
    BrowserRouter as Router, 
    Routes,
    Route    
} from 'react-router-dom';
import { HomePage } from '../components/homepage/HomePage';
import { NavbarComponent } from '../components/ui/NavbarComponent';

export const AppRouter = () => {
    return (
        <Router>
            <NavbarComponent />

            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>

        </Router>
    )
}

