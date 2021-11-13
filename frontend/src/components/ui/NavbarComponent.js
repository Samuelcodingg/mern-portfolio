import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFolder, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons'

export const NavbarComponent = () => {
    return (
        <nav className="p-4 d-flex justify-content-between align-items-center">
            <ul className="navbar">
                <NavLink 
                    to='/'
                    exact
                    activeClassName="bg-active"
                    className="fw-bold nav-link-port text-decoration-none primary-color px-3 py-2 rounded"
                >
                    Sobre mí
                    <FontAwesomeIcon icon={faUser} className="ms-2" />
                </NavLink>
                <NavLink
                    to='/projects'
                    exact
                    activeClassName="bg-active"
                    className="fw-bold nav-link-port text-decoration-none primary-color px-3 py-2 rounded ms-2"
                >
                    Proyectos
                    <FontAwesomeIcon icon={faFolder} className="ms-2" />
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    activeClassName="bg-active"
                    className="fw-bold nav-link-port text-decoration-none primary-color px-3 py-2 rounded ms-2"
                >
                    Acerca
                    <FontAwesomeIcon icon={faQuestionCircle} className="ms-2" />
                </NavLink>
            </ul>
            <div className="list-icons">
                <a href="https://www.linkedin.com/in/samuel-aar%C3%B3n-rom%C3%A1n-c%C3%A9spedes-21440512a/" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none"> <i className="fab fa-linkedin primary-color height-icon"></i> </a>
                <a href="https://github.com/Samuelcodingg" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none"> <i className="fab fa-github primary-color height-icon"></i> </a>
                <a href="malto: samuelroman39@gmail.com" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none">
                    <i className="fas fa-envelope primary-color height-icon"></i>
                </a>
            </div>
        </nav>
    )
}
