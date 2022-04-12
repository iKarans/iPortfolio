import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.scss";

import memoji from "../../assets/Memoji-Landing.png";
import { LeftQuote } from '../../components/LeftQuote/LeftQuote';
import { RightQuote } from '../../components/RightQuote/RightQuote';

import Typewriter from 'typewriter-effect';

interface LandingProps {

}

export const Landing: React.FC<LandingProps> = ({}) => {
        return (
            <div className="landing">
                <h1 className="landing__heading">
                    <Typewriter
                    options={{
                        strings: ["Hello.", "Kon'nichiwa.", "Vaṇakkam.", 
                        "annyeonghasibnikka.", "Hola.", "Hallo.", "Ciao.", "Nǐ hǎo.", "'ahlan.", "namaste."],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    I'm &lt;<span className="landing__heading__karan">Karan</span>&gt;<br></br>
                    A Software Developer.
                </h1>
                <div className="landing__quote-container">
                    <LeftQuote color={"#3f8dfb"} height={"45px"} />
                    <RightQuote color={"#3f8dfb"} height={"45px"} />
                    <p className="landing__quote-container__quote">If you have time to fantasize about a beautiful end, then just live beautifully 'til the end.</p>
                </div>
                <Link to={"/About"} className="landing__explore">Let's Explore</Link>
                <img src={memoji} className="landing__memoji" alt="Memoji" />
            </div>

        );
}