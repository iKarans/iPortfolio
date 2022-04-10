import React from 'react';
import "./Title.scss";

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({title}) => {
        return (
            <span className="title">
                {title}
            </span>
        );
}