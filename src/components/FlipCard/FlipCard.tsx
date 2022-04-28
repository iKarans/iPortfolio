import React from 'react';
import "./FlipCard.scss";

import { IPortfolio } from '../../modals/modals';

import { FaRocket, FaCode } from 'react-icons/fa';

interface FlipCardProps {
    project: IPortfolio;
}

export const FlipCard: React.FC<FlipCardProps> = ({project}) => {
    const {language, title, info , tools, githutLink, projectLink} = project;
        return (
            <div className="flip-card">
                <div className="flip-card__inner">
                    <div className="flip-card__inner__front">
                        <img src={require(`../../assets/${title}.png`)} alt="project" className="flip-card__inner__front__project-img" />
                    </div>
                    <div className="flip-card__inner__back">
                        <h3 className="flip-card__inner__back__heading">{title}</h3>
                        <p className="flip-card__inner__back__info">{info}</p>
                        <p className="flip-card__inner__back__tools">Tools: <span className="flip-card__inner__back__tools__langs">{tools}</span></p>
                        <a href={githutLink} target="_blank" className={`flip-card__inner__back__${projectLink ? "link" : "single"}`}>
                            <FaCode className="flip-card__inner__back__link__code" />
                        </a>
                        {projectLink && <a href={projectLink} target="_blank" >
                            <FaRocket className={`flip-card__inner__back__link__${projectLink ? "rocket" : "single"}`} />
                        </a>}
                    </div>
                </div>
            </div>
        );
}