import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { ContactForm } from '../contact-form/contact-form'
const Contact = (isInView) => {
    const [showButton, setShowButton] = useState(false)
    useInterval(() => {
        if (isInView.isInView === true) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, 20);
    return (
        <section id="contact">
            <h1>CONTACT</h1>
            <ContactForm />
        </section>
    );
};

export default Contact;