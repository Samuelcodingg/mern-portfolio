
import React, { useEffect, useState } from 'react';
import { getCoder } from '../../api/coder';
import { ContactSection } from './ContactSection';
import { MainSection } from './MainSection';
import { SkillsSection } from './SkillsSection';


export const HomePage = () => {

    const [coder, setCoder] = useState([]);

    const { name, title, first_description, second_description } = coder;

    const loadDataCoder = () => {

        getCoder().then(data => {
            setCoder({
                name: data[0].name,
                title: data[0].title,
                first_description: data[0].first_description,
                second_description: data[0].second_description,
            });
        });
    }

    useEffect(()=>{
        loadDataCoder();
    }, []);

    return (
        <div className="container animate__animated animate__fadeIn">
            <MainSection 
                name={name} 
                title={title} 
                first_description={first_description} 
            />

            <div className="text-center mt-5">
                <i className="fas fa-arrow-down moving-vertical primary-color fs-4"></i>
            </div>

            <div className="container">
                <SkillsSection second_description={second_description} />
            </div>

            <ContactSection />
        </div>
    )
}
