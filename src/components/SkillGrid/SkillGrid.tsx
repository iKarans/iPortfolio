import React from 'react';
import "./SkillGrid.scss";

import { FaMobileAlt, FaBug, FaPeopleArrows, FaObjectGroup, FaRunning, FaUserCheck } from 'react-icons/fa';

interface SkillGridProps {

}

export const SkillGrid: React.FC<SkillGridProps> = ({}) => {
        return (
            <div className="skill-grid">
                <h2 className="skill-grid__heading">Skills</h2>
                <FaMobileAlt className='skill-grid__icon' />
                <span className="skill-grid__text">Mobile first / Responsive Development</span>
                <FaBug className='skill-grid__icon' />
                <span className="skill-grid__text">Debugging</span>
                <FaPeopleArrows className='skill-grid__icon' />
                <span className="skill-grid__text">Pair Programming</span>
                <FaObjectGroup className='skill-grid__icon' />
                <span className="skill-grid__text">Object Oriented Programing</span>
                <FaRunning className='skill-grid__icon' />
                <span className="skill-grid__text">Agile Development</span>
                <FaUserCheck className='skill-grid__icon' />
                <span className="skill-grid__text">Test Driven Development</span>
            </div>
        );
}