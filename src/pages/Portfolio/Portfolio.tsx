import React from 'react';
import { LanguagesFilter } from '../../components/LanguagesFilter/LanguagesFilter';
import { Title } from '../../components/Title/Title';
import "./Portfolio.scss";

interface PortfolioProps {

}

export const Portfolio: React.FC<PortfolioProps> = ({}) => {
        return (
            <div className="portfolio">
                <Title title={"Portfolio.()"} />
                <LanguagesFilter languages={["All", "Javascript", "React.JS", "Java", "Other"]} />
            </div>
        );
}