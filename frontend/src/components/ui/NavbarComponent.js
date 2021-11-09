import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarComponent = () => {
    return (
        <nav className="p-4">
            <ul>
                <NavLink 
                    to='/'
                    exact
                    activeClassName="bg-active"
                    className="text-decoration-none primary-color p-4"
                >
                    Sobre mí
                </NavLink>
                <NavLink
                    to='/projects'
                    exact
                    activeClassName="bg-active"
                    className="text-decoration-none primary-color p-4"
                >
                    Proyectos
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    activeClassName="bg-active"
                    className="text-decoration-none primary-color p-4"
                >
                    Acerca
                </NavLink>
            </ul>
            <div>

            </div>
        </nav>
    )
}
