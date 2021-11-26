import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../api/projects';
import { API } from '../../config';

export const ProjectsPage = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(data => {
                setProjects(data);
            })
    }, []);

    return (
        <>
            <h1 className="text-center primary-color">Proyectos</h1>
            <p className="mt-4 fs-6 justify">
                Soy una persona que cree necesaria la aplicación de conocimientos en algo "tangible" es por ello que me encuentro desarrollando proyectos constantemente. Estos son los principales proyectos que he desarrollado. Puedes ver todos los proyectos en mi perfil de <a href="https://github.com/Samuelcodingg" target="_blank" rel="noreferrer" className="primary-color">  GitHub </a>
            </p>
            <div className="px-4 py-3 border-primary-color bg-clear-color rounded">
                <p className="mb-0 primary-color fw-bold"><i className="fas fa-laptop-code fs-5"></i> &nbsp; El contenido mostrado a continuación es desarrollado por mí utilizando distintas tecnologías</p>
            </div>

            <div className="row mt-5 min-vh-100 ">
                {
                    projects.map(project => (
                        <Link 
                            to={`/projects/${project._id}`}
                            className="col-12 col-md-6 mx-auto mb-4 project-container pointer text-decoration-none animate__animated animate__fadeIn" 
                            key={ project._id } 
                            onClick={ console.log(project._id) }
                        >
                            <img src={`${API}/projects/photo/${project._id}`} alt={project.name} className="rounded img-fluid shadow " />
                            <p className="text-center bg-primary-color py-3 text-white rounded position-relative title-img opacity-0">{project.name}</p>
                        </Link>
                    ))
                }
            </div>

        </>
    )
}
