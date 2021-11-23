import React from 'react';
import meImg from './undraw_certificate_343v.png';

export const SkillsSection = ( {second_description} ) => {
    return (
        <>
            <div className="row mt-5">

                <div className="text-center col-md-6 mx-auto">
                    <img src={meImg} alt="certificate" className="img-me" />
                    <p className="text-start">
                        {second_description}
                    </p>
                </div>
                
            </div>
        </>
    )
}
