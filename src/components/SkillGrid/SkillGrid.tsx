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
                <p className="skill-grid__text">Mobile first / Responsive Development</p>
                <FaBug className='skill-grid__icon' />
                <p className="skill-grid__text">Debugging</p>
                <FaPeopleArrows className='skill-grid__icon' />
                <p className="skill-grid__text">Pair Programming</p>
                <FaObjectGroup className='skill-grid__icon' />
                <p className="skill-grid__text">Object Oriented Programing</p>
                <FaRunning className='skill-grid__icon' />
                <p className="skill-grid__text">Agile Development</p>
                <FaUserCheck className='skill-grid__icon' />
                <p className="skill-grid__text">Test Driven Development</p>
            </div>
        );
}