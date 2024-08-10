// src/components/Contact.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from '@emailjs/browser';
import contactPic from "../assets/contact.png";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';


// Access environment variables
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const templateParams = {
      to_name: 'Shevait Verma', // Replace with your name or dynamic value
      from_name: formData.name, // Maps name to form_name
      email_id: formData.email, // Maps email to email_id
      message: formData.message, // Maps message to message
    };
    // EmailJS send function
    emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        limitRate: {
          throttle: 10 * 1000, // 20 seconds
        },
      }
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id={id} className="contact py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:pr-8">
          <img
            src={contactPic}
            alt="Contact Us"
            className="w-full h-[26rem] max-w-2xl rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Or reach out directly:</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:shevaitverma@outlook.com" className="text-blue-500 hover:text-blue-600 transition">
                <FaEnvelope size={28} />
              </a>
              <a href="tel:+919622391385" className="text-blue-500 hover:text-blue-600 transition">
                <FaPhone size={28} />
              </a>
              <a href="https://www.linkedin.com/in/shevait-verma/" className="text-blue-500 hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/Shevaitverma" className="text-blue-500 hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
