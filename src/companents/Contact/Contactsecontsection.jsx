import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contactsection1.scss';
import logo from '../../assets/Allahverdi.png'
const Contactsecontsection = () => {
    // Validation schema for form fields
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    // Initial values for form fields
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission here
        console.log('Form values:', values);
        resetForm(); // Reset form after submission
    };

    return (
        <div className="contact-section">
            <div className="contact-info">
                <img src={logo} alt="Your Image" className="profile-image" />
              <p>  <strong>Agamaliyev Allahverdi</strong></p>
                <div className="contact-details">
                    <div className="contact-item">
                        <span className="icon">📧</span> agamaliyevallahverdii@gmail.com
                    </div>
                    <div className="contact-item">
                        <span className="icon">📞</span> +994 51-323-62-62
                    </div>
                </div>
                <div className="social-icons">
                    <span>Found us on</span>
                    <div className="icons">
                                        <a href="https://www.linkedin.com/in/allahverdi-agamaliyev/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/agamaliyevh_/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://github.com/AAllahverdi2"><i className="fa-brands fa-github"></i></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-regular fa-envelope-open"></i></a>
                            <a href="https://www.facebook.com/allahverdi.agamaliyev.3"><i className="fa-brands fa-facebook-f"></i></a>

                        </div>
                    </div>
                </div>


                <div className="contact-form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" placeholder="What's your name?" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email" placeholder="What's your email?" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Leave a message</label>
                                <Field name="message" as="textarea" placeholder="Please type your message here..." />
                                <ErrorMessage name="message" component="div" className="error" />
                            </div>
                            <button type="submit" className="submit-button">Request A Quote</button>
                        </Form>
                    </Formik>
                </div>
            </div>
            );
};

            export default Contactsecontsection;
