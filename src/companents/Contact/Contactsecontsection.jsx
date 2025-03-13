import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './contactsection1.scss';
import logo from '../../assets/Allahverdi.png';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
    // Yup ile form doğrulama şeması
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const initialValues = {
        
        name: '',
        email: '',

        message: '',
    };

    // Formu gönderme işlemi
    const handleSubmit = async (values, { resetForm }) => {
        try {
            // API isteği
            const response = await axios.post(
                'https://portfolio-backend-api-indol.vercel.app/portfolio/contact/send-message',
                values
            );

            // Başarılı ise kullanıcıya başarı mesajı göster
            toast.success(response.data.message);
            resetForm(); // Formu sıfırla
        } catch (error) {
            // Hata durumunda hata mesajını göster
            console.error("Error sending message:", error.response || error); // Hata detayları
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            <h2 className="experience__header text-center">Contact</h2>
            <div className="contact-section container">
                <div className="contact-info">
                    <img src={logo} alt="Your Image" className="profile-image" />
                    <p><strong>Agamaliyev Allahverdi</strong></p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="icon">📧</span> agamaliyevallahverdii@gmail.com
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span> +994 51-323-62-62
                        </div>
                    </div>
                    <div className="social-icons">
                        <span>Find me on</span>
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
                            <button type="submit" className="submit-button">Send Message</button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
};

export default ContactSection;
