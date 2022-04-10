import React from 'react';
import "./FlipCard.scss";

import calculator from "../../assets/iCalculator.png";

interface FlipCardProps {
    
}

export const FlipCard: React.FC<FlipCardProps> = ({}) => {
        return (
            <div className="flip-card">
                <div className="flip-card__inner">
                    <div className="flip-card__inner__front">
                        <img src={calculator} alt="project" className="flip-card__inner__front__project-img" />
                    </div>
                    <div className="flip-card__inner__back">
                        <h4 className="flip-card__inner__back__heading">iCalculator</h4>
                        <p className="flip-card__inner__back__info">A calculator that mimics the functionality of the iOS calculator app.</p>
                        <p className="flip-card__inner__back__tools">Tools: <span className="flip-card__inner__back__tools__logos">HTML | SASS | CSS | JavaScript </span></p>
                        <a href="https://ikarans.github.io/iCalculator/" target="_blank" className="flip-card__inner__back__link">
                            <i className="fas fa-rocket flip-card__inner__back__link__rocket"></i>
                        </a>
                        <a href="https://github.com/iKarans/iCalculator" target="_blank" className="flip-card__inner__back__link">
                            <i className="fas fa-code flip-card__inner__back__link__code"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
}