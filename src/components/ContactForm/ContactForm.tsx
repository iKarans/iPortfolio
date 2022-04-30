import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import "./ContactForm.scss";

interface ContactFormProps {

}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
    const form: any = useRef();

    const handleFormSubmitSendEmail = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();

        emailjs.sendForm('service_2fe2otw', 'template_3q5r14m', form.current, 'JYyjzH7vYFLq8AvSt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
        return (
            <form className="contact-form" ref={form} onSubmit={handleFormSubmitSendEmail}>
                <input type="text" name="name" placeholder="Name" className="contact-form__name" required />
                <input type="email" name="email" placeholder="Email" className="contact-form__email" required />
                <input type="text" name="subject" placeholder="Subject" className="contact-form__subject" required />
                <textarea placeholder="Message" name="message" className="contact-form__message" required />
                <button type="submit" className="contact-form__submit-btn" value="Send">Send</button>
            </form>
        );
}