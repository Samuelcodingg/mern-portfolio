import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarComponent = () => {
    return (
        <div>
            <div>
                <NavLink 
                    to='/'
                    exact
                    activeClassName='active'
                >
                    Sobre mí
                </NavLink>
                <NavLink
                    to='/projects'
                    exact
                    activeClassName='active'
                >
                    Proyectos
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    activeClassName='active'
                >
                    Acerca
                </NavLink>
            </div>
            <div>

            </div>
        </div>
    )
}
