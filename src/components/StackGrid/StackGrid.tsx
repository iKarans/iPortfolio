import React from 'react';
import "./StackGrid.scss";

import { FaHtml5, FaCss3Alt, FaSass, FaGit, FaGithubAlt, FaReact, FaJava, FaRProject, FaPython } from 'react-icons/fa';
import  { SiJavascript, SiMysql, SiCplusplus } from 'react-icons/si';
interface StackGridProps {

}

export const StackGrid: React.FC<StackGridProps> = ({}) => {
        return (
            <div className="stack-grid">
                <h2 className="stack-grid__heading">Stack</h2>
                <FaHtml5 className='stack-grid__html' />
                <FaCss3Alt className='stack-grid__css' />
                <FaSass className='stack-grid__sass' />
                <SiJavascript className='stack-grid__javascript' />
                <FaReact className='stack-grid__react' />
                <FaGit className='stack-grid__git' />
                <FaGithubAlt className='stack-grid__github' />
                <SiCplusplus
                 className='stack-grid__cpp' />
                 <FaJava className='stack-grid__java' />
                 <SiMysql className='stack-grid__sql' />
                 <FaRProject className='stack-grid__r' />
                 <FaPython className='stack-grid__python' />
            </div>
        );
}
