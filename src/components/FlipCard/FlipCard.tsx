import React from 'react';
import "./FlipCard.scss";

import calculator from "../../assets/iCalculator.png";
import { IPortfolio } from '../../modals/modals';

import { FaRocket, FaCode } from 'react-icons/fa';

interface FlipCardProps {
    project: IPortfolio;
}

export const FlipCard: React.FC<FlipCardProps> = ({project}) => {
    const {title, info , tools, githutLink, projectLink} = project;
        return (
            <div className="flip-card">
                <div className="flip-card__inner">
                    <div className="flip-card__inner__front">
                        <img src={calculator} alt="project" className="flip-card__inner__front__project-img" />
                    </div>
                    <div className="flip-card__inner__back">
                        <h4 className="flip-card__inner__back__heading">{title}</h4>
                        <p className="flip-card__inner__back__info">{info}</p>
                        <p className="flip-card__inner__back__tools">Tools: <span className="flip-card__inner__back__tools__langs">{tools}</span></p>
                        <a href={githutLink} target="_blank" className="flip-card__inner__back__link">
                            <FaRocket className="flip-card__inner__back__link__rocket"/>
                        </a>
                        <a href={projectLink} target="_blank" className="flip-card__inner__back__link">
                            <FaCode className="flip-card__inner__back__link__code" />
                        </a>
                    </div>
                </div>
            </div>
        );
}