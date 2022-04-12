import React from 'react';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import { LanguagesFilter } from '../../components/LanguagesFilter/LanguagesFilter';
import { Title } from '../../components/Title/Title';
import "./Portfolio.scss";

import projects from "../../data/projects";
interface PortfolioProps {

}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
        return (
            <div className="portfolio">
                <Title title={"Portfolio.()"} />
                <LanguagesFilter languages={["All", "Javascript", "React.JS", "Java", "Other"]} />
                {projects.map((project, index) => <FlipCard project={project} />)}
            </div>
        );
}