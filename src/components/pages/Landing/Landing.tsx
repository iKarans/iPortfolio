import React from 'react';
import "./Landing.scss";

interface LandingProps {

}

export const Landing: React.FC<LandingProps> = ({}) => {
        return (
            <div className="Landing">
                <h1 className="Landing__heading">
                    <span id="typewriterText" className="Landing__heading__hey">Hey.</span>
                    I'm <span className="Landing__heading__semicolon">&lt;</span><span className="Landing__heading__karan">Karan</span><span className="Landing__heading__semicolon">&gt;</span>
                    Software Developer.
                </h1>
            </div>
        );
}