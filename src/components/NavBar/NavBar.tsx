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
                <a href="https://www.youtube.com/watch?start=118&end=219.741&v=bE7nAi5xA4U&feature=youtu.be" target="black_" ><img src={memoji} alt="Memoji" className="nav-bar__memoji" /></a>
                <ul className="nav-bar__links">
                    {navLinks.map((link, index) => {
                        return <li className='nav-bar__links__link' key={index}>
                            <Link to={link == "Home" ? "/" : link}>{link}</Link>
                        </li>
                    })}
                </ul>
                <div className="nav-bar__socials">
                    <a href="https://www.linkedin.com/in/karan-sivalingam/" target="_blank" className="nav-bar__socials__social">
                        <FaLinkedinIn className="nav-bar__socials__social__linked-in"/>
                    </a>
                    <a href="https://github.com/iKarans/" target="_blank" className="nav-bar__socials__social">
                        <FaGithubSquare className="nav-bar__socials__social__github"/>
                    </a>
                    <a href={require(`../../assets/CV.pdf`)} download className="nav-bar__socials__social">
                        <FaFileDownload className="nav-bar__socials__social__cv"/>
                    </a>
                </div>
            </nav>
        );
}