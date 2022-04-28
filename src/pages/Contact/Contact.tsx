import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/Title/Title';
import "./Contact.scss";

interface ContactProps {

}

export const Contact: React.FC<ContactProps> = ({}) => {
        return (
                <div className="contact">
                        <Title title="Contact" className="title__contact" />
                        <ContactForm />
                </div>
        );
}