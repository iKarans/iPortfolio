import React from 'react';
import "./LanguagesFilter.scss";

interface LanguagesFilterProps {
    languages: string[];
}

export const LanguagesFilter: React.FC<LanguagesFilterProps> = ({languages}) => {
        return (
            <ul className='languages-filter'>
                {languages.map((language, index) => {
                    return (<li className='languages-filter__language' key={index}>{language}</li>);
                })}
            </ul>
        );
}