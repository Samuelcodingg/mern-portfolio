import React from 'react'

export const Footer = () => {
    return (
        <footer className="container pb-4">
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/samuel-aar%C3%B3n-rom%C3%A1n-c%C3%A9spedes-21440512a/" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none"> <i className="fab fa-linkedin primary-color height-icon"></i> </a>
                        <a href="https://github.com/Samuelcodingg" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none"> <i className="fab fa-github primary-color height-icon"></i> </a>
                        <a href="mailto: samuelroman39@gmail.com" target="_blank" rel="noreferrer" className="nav-link-port p-3 rounded-circle text-decoration-none">
                                <i className="fas fa-envelope primary-color height-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
