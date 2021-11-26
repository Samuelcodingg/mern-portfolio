import React from 'react';
import { faFolder, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import imgCoding from './undraw_freelancer_re_irh4.svg';

export const MainSection = ({ name, title, first_description }) => {
    const _id = '618c39b578524ca53dde04f9';

    return (
        <div className="row animate__animated animate__fadeIn">
            <div className="col-md-6 col-12">
                <h1 className="text-center primary-color fs-1"> {name} </h1>
                <h5 className="text-center fs-4 mt-2"><span className="typed-text"> {title}</span><span className="cursor typing">&nbsp;</span></h5>
                <p className="fs-5 text-secondary mt-4" > {first_description} </p>
                <div className="row text-center d-flex align-items-center">
                    <a
                        href='#perfil'
                        className="bg-primary-color text-white text-decoration-none d-block col-12 col-md-5 rounded fw-bold hover-bg-dark animation-time py-2 mx-auto"
                    >
                        VER PERFIL  <FontAwesomeIcon icon={faUser} />
                    </a>
                    <Link
                        to="/projects"
                        className="col-12 col-md-5 offset-1 mt-4 mt-md-0 mx-auto text-decoration-none d-block border-primary-color fw-bold hover-bg-dark animation-time primary-color py-2"
                    >
                        VER PROYECTOS <FontAwesomeIcon icon={faFolder} />
                    </Link>
                </div>
                <div className="shadow-lg px-4 py-3 mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div>
                                <img src={`${API}/coders/photo/${_id}`} alt="samuel-roman" className="rounded-circle img-fluid" style={{ height: '50px', width: '50px' }} />
                            </div>
                            <div className="ms-2">
                                <h5 className="mb-0">{name}</h5>
                                <p className="text-secondary mb-0">{title}</p>
                            </div>
                        </div>
                        <Link 
                            className=" d-none d-md-block text-secondary text-decoration-none hover-bg-dark animation-time"
                            to="mailto: samuelroman39@gmail.com"    
                        >
                            ENVÍAME UN MENSAJE &nbsp;
                            <i className="fas fa-envelope"></i>
                        </Link>
                    </div>
                    <Link
                        to="/cv"
                        className="mt-3 text-center primary-color text-decoration-none fw-bold d-block w-100 hover-bg-dark animation-time"
                    >
                        VER CURRICULUM &nbsp;
                        <i className="fas fa-file-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="col-md-6 mx-auto d-none d-md-block">
                <img src={imgCoding} alt="coding" className="img-me img-fluid" />
            </div>
        </div>
    )
}
