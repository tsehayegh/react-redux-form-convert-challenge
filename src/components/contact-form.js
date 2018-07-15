import React from 'react';
import {reduxForm, Field } from 'redux-form';


export function ContactForm() {
    return (
        <form>
            <Field type="text" 
                    id="name" 
                    name="name"
                    label="Your Name"
                    component='input'/>
            <Field type="email" 
                    id="email" 
                    name="email"
                    label="Emaill address"
                    component="input"/>
            <Field id="message" 
                    name="message"
                    type="text"
                    label="Message"
                    component="textarea"/>
            <button>Submit</button>
        </form>
    );
}
export default reduxForm({
    form: 'register'
})(ContactForm);

