import React from 'react';
import img from './undraw_faq_re_31cw.svg';

export const AboutPage = () => {
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <img src={img} alt="about" className="img-fluid" />
                <h1 className="primary-color text-center" > Acerca </h1>
                <p>
                    Este portafolio web fue construido usando React y Bootstrap para el frontend, mientras que para el backend se usó NodeJS, Express y MongoDB. Todo esto utilizando la arquitectura REST mediante la construcción de una API.
                </p>
            </div>
        </div>
    )
}
