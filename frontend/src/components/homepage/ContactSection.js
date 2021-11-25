import React from 'react';
import mail from './undraw_mailbox_re_dvds.svg';

export const ContactSection = () => {
    return (
        <div className="row">
            <div className="col-md-6 text-center my-5 mx-auto">
                <img src={mail} alt="mail" className="height-img-homepage" />
                <h1 className="primary-color mt-4">Contáctame</h1>
                <p className="text-start">Si quieres comunicarte conmigo, puedes hacerlo a través de mi correo <a href="mailto: samuelroman39@gmail.com" target="_blank" rel="noreferrer" className="primary-color" >samuelroman39@gmail.com</a> o través de mi <a href="https://www.linkedin.com/in/samuel-aar%C3%B3n-rom%C3%A1n-c%C3%A9spedes-21440512a/" target="_blank" rel="noreferrer" className="primary-color">linkedin</a>. </p>
            </div>
        </div>
    )
}
