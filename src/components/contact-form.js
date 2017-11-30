import React from 'react';

export default function ContactForm() {
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <button>Submit</button>
        </form>
    );
}
