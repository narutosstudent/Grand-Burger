import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        text: ""
    });

    const onChange = e => {
        setFormData({
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
            subject: "",
            text: ""
        })
    }

    const {name, email, subject, text} = formData;

    return (
        <section className="contact">
            <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={onSubmit}>
                <h1>Contact</h1>
                <input type="text" name="name" value={name} placeholder="Your Name ..." onChange={e => onChange(e)} />
                <input type="Email" name="email" value={email} placeholder="Your Email ..." onChange={e => onChange(e)} />
                <input type="text" name="subject" value={subject} placeholder="This is about ... ?" onChange={e => onChange(e)} />
                <textarea name="text" value={text} placeholder="What do you wanna ask ... ?"></textarea>
                <button type="submit" className="contact-button">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
