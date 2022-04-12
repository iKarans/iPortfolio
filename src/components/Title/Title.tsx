import React from 'react';
import "./Title.scss";

interface TitleProps {
    title: string,
    className: string
}

export const Title: React.FC<TitleProps> = ({title, className}) => {
        return (
            <span className={`title ${className}`}>
                {title}
            </span>
        );
}