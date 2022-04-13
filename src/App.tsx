import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";
import { Landing } from './pages/Landing/Landing';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/About/About';
import { Portfolio } from './pages/Portfolio/Portfolio';

function App() {
    return (
        <div className="App">
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                        value: "#1f2026",
                        },
                    },
                    particles: {
                        "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                        },
                        color: {
                        value: ["#ce679b","#f05830","#027dc5","#f58232","#fcca3f", "#00d8ff"]
                        },
                        shape: {
                        type: ["circle", "star", "triangle", "polygon"],
                        stroke: {
                            width: 0,
                            color: "#b6b2b2"
                        }
                        },
                        opacity: {
                        value: 0.5211089197812949,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                        },
                        size: {
                        value: 8.017060304327615,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 12.181158184520175,
                            size_min: 0.1,
                            sync: true
                        }
                        },
                        line_linked: {
                        enable: false,
                        distance: 100,
                        color: "#c8c8c8",
                        opacity: 0.4,
                        width: 1
                        },
                        move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "bounce",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                        onhover: {
                            enable: false,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: false,
                            mode: "push"
                        },
                        resize: true
                        },
                        modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                            opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                        }
                    },
                    retina_detect: true
                }}
            />
            <NavBar navLinks={["Home", "About", "Portfolio"]} />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/About" element={<About />} />
                <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
}

export default App;
