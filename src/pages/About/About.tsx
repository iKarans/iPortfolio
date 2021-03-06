import React from 'react';
import { SkillGrid } from '../../components/SkillGrid/SkillGrid';
import { StackGrid } from '../../components/StackGrid/StackGrid';
import { Title } from '../../components/Title/Title';
import "./About.scss";

interface AboutProps {

}

export const About: React.FC<AboutProps> = ({}) => {
        return (
            <div className="about">
                <Title title={"About.()"} className="about__title"/>
                <p className="about__about-me">
                    I am a Mathematics with Economics graduate from the London School of Economics who fell down the rabbit hole of programming and software.
                    The endless learning potential combined with the ability to work on projects that have a meaningful impact on people’s lives consolidated my decision to pursue a career in this field.
                </p>
                <StackGrid />
                <SkillGrid />
            </div>
        );
}