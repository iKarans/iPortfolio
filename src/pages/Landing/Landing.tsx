import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Landing.scss";

import memoji from "../../assets/Memoji-Landing.png";

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


import Typewriter from 'typewriter-effect';

interface LandingProps {

}

export const Landing: React.FC<LandingProps> = ({}) => {

    const [quote, setQuote] = useState<string>("If you have time to fantasize about a beautiful end, then just live beautifully 'til the end.")

    const BASE_URL: string = "http://localhost:8080/quotes";

    useEffect(() => {
        axios.get(`${BASE_URL}?category=Portfolio`)
        .then(response => setQuote(response.data[Math.floor(response.data.length * Math.random())].quote))
        .catch(error => console.log(error));
    },[BASE_URL])

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
                    <FaQuoteLeft className="landing__quote-container__left-marks"/>
                    <FaQuoteRight className="landing__quote-container__right-marks" />
                    <h3 className="landing__quote-container__quote">{quote}</h3>
                </div>
                <Link to={"/About"} className="landing__explore">Let's Explore</Link>
                <img src={memoji} className="landing__memoji" alt="Memoji" />
            </div>

        );
}