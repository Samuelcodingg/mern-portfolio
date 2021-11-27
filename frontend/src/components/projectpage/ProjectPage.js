import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProjectById } from '../../api/projects';
import { API } from '../../config';

export const ProjectPage = () => {

    const { id } = useParams();

    const [project, setProject] = useState({});

    useEffect(() => {
        getProjectById(id)
            .then(data => {
                setProject(data);
                console.log(data);
            })
    }, [id]);

    return (
        <>
            <Link
                to="/projects"
            >
                <i class="fas fa-arrow-alt-circle-left primary-color fs-1"></i>
            </Link>
            <div className="row">
                <div className="col-12 col-md-7 mx-auto">
                    <img src={`${API}/projects/photo/${id}`} alt="project" className="rounded img-fluid shadow" />
                </div>
                <div className="col-12 col-md-5 mx-auto mt-4 mt-md-0 animate__animated animate__fadeIn min-vh-100">
                    <h2 className="text-center text-md-start animate__animated animate__fadeIn" > {project.name} </h2>
                    <p className="mt-3 animate__animated animate__fadeIn">
                        {project.description}
                    </p>
                    <div className="row">
                        {
                            project.web ?
                                <div className="col-12 col-md-6 animate__animated animate__fadeIn">
                                    <a href={project.web} target="_blank" rel="noreferrer" className="mx-auto text-decoration-none d-block border-primary-color fw-bold hover-bg-dark animation-time primary-color py-2 text-center"><i className="fas fa-globe-americas fs-5"></i> &nbsp; SITIO WEB</a>
                                </div>
                                : null
                        }

                        {
                            project.github && project.isPrivate === false ?
                                <div className="col-12 col-md-6 mt-3 mt-md-0 animate__animated animate__fadeIn">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="mx-auto text-decoration-none d-block border-primary-color fw-bold hover-bg-dark animation-time bg-primary-color text-white py-2 text-center rounded"><i className="fab fa-github fs-5"></i>&nbsp; GITHUB   </a>
                                </div>
                                :
                                <div className="px-4 py-3 border-primary-color bg-clear-color rounded">
                                    <p className="mb-0 primary-color fw-bold"><i className="fas fa-lock fs-5"></i> &nbsp; Este proyecto es privado, es por ello que no se puede mostrar el repositorio.</p>
                                </div>
                        }
                    </div>
                    <div className="mt-3 border-primary-color rounded">
                        <p className="bg-primary-color text-white px-3 py-2">Tecnologías</p>
                        {
                            project.technologies ? 
                                project.technologies.map(technology => (
                                    <p className="primary-color px-3 py-2 animate__animated animate__fadeIn"> <i className={`${technology.icon} fs-5`} ></i> &nbsp;  {technology.name}  </p>
                                ))
                                : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
