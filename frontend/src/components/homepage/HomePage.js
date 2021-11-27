
import React from 'react';
import { ContactSection } from './ContactSection';
import { MainSection } from './MainSection';
import { SkillsSection } from './SkillsSection';


export const HomePage = () => {
    return (
        <div className="container animate__animated animate__fadeIn">
            <MainSection />

            <div className="text-center mt-5">
                <i className="fas fa-arrow-down moving-vertical primary-color fs-4"></i>
            </div>

            <div className="container">
                <SkillsSection />
            </div>

            <ContactSection />
        </div>
    )
}
