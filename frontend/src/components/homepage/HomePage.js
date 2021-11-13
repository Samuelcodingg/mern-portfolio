import React, { useEffect, useState } from 'react';
import { getCoder } from '../../api/coder';
import imgCoding from './undraw_freelancer_re_irh4.svg';

export const HomePage = () => {

    const [coder, setCoder] = useState([]);

    const { name, title, first_description, second_description } = coder;

    const loadDataCoder = async () => {
        const data = await getCoder();
        setCoder({
            name: data[0].name,
            title: data[0].title,
            first_description: data[0].first_description,
            second_description: data[0].second_description,
        });
        
        console.log(data);
    }

    useEffect(()=>{
        loadDataCoder();
    }, []);

    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h1 className="text-center primary-color fs-1"> {name} </h1>
                    <h5 className="text-center fs-4 mt-2"><span className="typed-text"> {title}</span><span className="cursor typing">&nbsp;</span></h5>
                    <p className="fs-5 text-secondary mt-4" > {first_description} </p>
                </div>
                <div className="col-md-6 mx-auto d-none d-md-block">
                    <img src={imgCoding} alt="coding" className="height-img-homepage img-fluid"/>
                </div>
            </div>

        </div>
    )
}
