import React, { useEffect, useState } from 'react';
import { getSkills } from '../../api/skills';
import { API } from '../../config';
import meImg from './undraw_certificate_-343-v.svg';

export const SkillsSection = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getSkills()
            .then(data => {
                setSkills(data);
            })
    }, []);

    return (
        <>
            <div className="row mt-5 mb-3" id="perfil">
                <div className="text-center col-md-6 mx-auto">
                    <img src={meImg} alt="certificate" className="img-me" />
                    <p className="text-start my-4">
                        Actualmente resido en Lima, Perú. Siempre practico y aprendo distintas tecnlogías que se requieren en el mercado laboral. Actualmente trabajo y sigo mejorando en:
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="row min-vh-100">
                        {
                            skills.map(skill => (
                                <div className="col-6 col-md-4 mb-4 mx-auto" key={skill._id}>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{skill.name}</h5>
                                            <img 
                                                src={`${API}/skills/photo/${skill._id}`} 
                                                alt={skill.name} 
                                                className="img-fluid" 
                                                style={{ height: '100px', width: '100px' }}    
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
