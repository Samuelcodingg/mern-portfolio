import React from 'react';
import pdf from './SAMUEL ROMAN CV.pdf';

export const CvPage = () => {
    return (
        <div className="min-vh-100">
            <object data={pdf} type="application/pdf" width="100%" height="1200">
                <p>It appears you don't have a PDF plugin for this browser.
                    No biggie... you can <a href="cv.pdf">click here to
                    download the PDF file.</a></p>
            </object>
        </div>
    )
}
