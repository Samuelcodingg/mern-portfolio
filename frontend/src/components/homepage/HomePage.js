import React, { useEffect, useState } from 'react';
import imgCoding from './undraw_freelancer_re_irh4.svg';

export const HomePage = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h1 className="text-center primary-color">Samuel Román</h1>
                    <h5 className="text-center"><span className="typed-text"> Desarrollador de software</span><span className="cursor typing">&nbsp;</span></h5>
                </div>
                <div className="col-md-6 mx-auto d-none d-md-block">
                    <img src={imgCoding} alt="coding" className="height-img-homepage img-fluid"/>
                </div>
            </div>

        </div>
    )
}
