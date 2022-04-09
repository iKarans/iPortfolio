import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.scss";

import memoji from "../../assets/Memoji-Landing.png";
import { LeftQuote } from '../../components/LeftQuote/LeftQuote';
import { RightQuote } from '../../components/RightQuote/RightQuote';

interface LandingProps {

}

export const Landing: React.FC<LandingProps> = ({}) => {
        return (
            <div className="landing">
                <h1 className="landing__heading">
                    <span id="typewriterText" className="landing__heading__hey">Hey.</span><br></br>
                    I'm <span className="landing__heading__crocodile">&lt;</span><span className="landing__heading__karan">Karan</span><span className="landing__heading__crocodile">&gt;</span><br></br>
                    A Software Developer.
                </h1>
                <div className="landing__quote-container">
                    <LeftQuote color={"#3f8dfb"} height={"45px"} />
                    <RightQuote color={"#3f8dfb"} height={"45px"} />
                    <p className="landing__quote-container__quote">If you have time to fantasize about a beautiful end, then just live beautifully 'til the end.</p>
                </div>
                <Link to={"/About"} className="landing__explore">Let's Explore</Link>
                <img src={memoji} className="landing__memoji" alt="Karan Memoji" />
            </div>

        );
}