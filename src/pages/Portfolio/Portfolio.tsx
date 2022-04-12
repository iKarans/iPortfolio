import React, { useState } from 'react';
import { FlipCard } from '../../components/FlipCard/FlipCard';
import { LanguagesFilter } from '../../components/LanguagesFilter/LanguagesFilter';
import { Title } from '../../components/Title/Title';
import "./Portfolio.scss";

import projects from "../../data/projects";
interface PortfolioProps {

}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
    const [filter, setFilter] = useState<string>("All");
        return (
            <div className="portfolio">
                <Title title={"Portfolio.()"} className={"portfolio__title"}/>
                <LanguagesFilter filter={filter} languages={["All", "Javascript", "React.JS", "Java", "Other"]} setFilter={setFilter} />
                <div className="portfolio__gallery">
                    {projects.filter(project => filter == "All" ? true : project.language == filter).map((project, index) => <FlipCard project={project} key={index} />)}
                </div>
            </div>
        );
}
