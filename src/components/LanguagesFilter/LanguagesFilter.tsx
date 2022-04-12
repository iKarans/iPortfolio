import React from 'react';
import "./LanguagesFilter.scss";

interface LanguagesFilterProps {
    languages: string[],
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    filter: string;
}

export const LanguagesFilter: React.FC<LanguagesFilterProps> = ({languages, setFilter, filter}) => {
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const liElement = e.target as HTMLLIElement;
        setFilter(liElement.innerText);
    }
        return (
            <ul className='languages-filter'>
                {languages.map((language, index) => {
                    return (<li className={`languages-filter__language-selected"}`} key={index} onClick={(e) => handleClick(e) }>{language}</li>);
                })}
            </ul>
        );
}