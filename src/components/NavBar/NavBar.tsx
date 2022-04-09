import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import memoji from "../../assets/Memoji-Nav.png";
import { FaLinkedinIn, FaFileDownload, FaGithubSquare } from 'react-icons/fa';

interface NavBarProps {
    navLinks: string[],
}

export const NavBar: React.FC<NavBarProps> = ({navLinks}) => {
        return (
            <nav className='nav-bar'>
                <img src={memoji} alt="Karan Memoji" className="nav-bar__memoji" />
                <ul className="nav-bar__links">
                    {navLinks.map((link, index) => {
                        return <li className='nav-bar__links__link'>
                            <Link to={link}>{link}</Link>
                        </li>
                    })}
                </ul>
                <div className="nav-bar__socials">
                    <FaLinkedinIn className="nav-bar__socials__linked-in "/>
                    <FaGithubSquare className="nav-bar__socials__github"/>
                    <FaFileDownload className="nav-bar__socials__downlaod"/>
                </div>
            </nav>
        );
}