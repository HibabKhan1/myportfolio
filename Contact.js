import React, { useState } from "react";
import { sendEmail } from "../emailjs-config";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData)
            .then(() => alert("Email sent successfully!"))
            .catch((error) => console.error("Error sending email:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" placeholder="Your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <textarea placeholder="Your Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <button type="submit">Send</button>
        </form>
    );
};

export default Contact;