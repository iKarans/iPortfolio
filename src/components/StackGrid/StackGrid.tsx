import React from 'react';
import "./StackGrid.scss";

import { FaHtml5, FaCss3Alt, FaSass, FaGit, FaGithubAlt, FaReact, FaJava, FaRProject, FaPython } from 'react-icons/fa';
import  { SiJavascript, SiMysql, SiCplusplus } from 'react-icons/si';
interface StackGridProps {

}

export const StackGrid: React.FC<StackGridProps> = ({}) => {
        return (
            <div className="stack-grid">
                <h3 className="stack-grid__heading">Stack</h3>
                <FaHtml5 className='stack-grid__icon' />
                <FaCss3Alt className='stack-grid__icon' />
                <FaSass className='stack-grid__icon' />
                <SiJavascript className='stack-grid__icon' />
                <FaReact className='stack-grid__icon' />
                <FaGit className='stack-grid__icon' />
                <FaGithubAlt className='stack-grid__icon' />
                <SiCplusplus
                 className='stack-grid__icon' />
                 <FaJava className='stack-grid__icon' />
                 <SiMysql className='stack-grid__icon' />
                 <FaRProject className='stack-grid__icon' />
                 <FaPython className='stack-grid__icon' />
            </div>
        );
}
