import React from 'react';
import "./Title.scss";

interface TitleProps {
    title: string,
    className: string
}

export const Title: React.FC<TitleProps> = ({title, className}) => {
        return (
            <h1 className={`title ${className}`}>
                <span className={`title__underline`}>
                    {title}
                </span>
            </h1>
        );
}