import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic
    if (formState.name && formState.email && formState.subject && formState.message) {
      setStatus('success');
      setTimeout(() => setStatus(null), 3000);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h2>Do not hesitate to reach out</h2>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <p>Dallas, Texas. United States</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <a href="mailto:jdbrachoavila@gmail.com">jdbrachoavila@gmail.com</a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faLinkedin} className="info-icon" />
          <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <a href="tel:+12148176960">+1 214-817-6960</a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faLanguage} className="info-icon" />
          <p>Spanish and English</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formState.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {status === 'success' && <p className="success-message">Your message has been sent!</p>}
        {status === 'error' && <p className="error-message">Please fill out all fields correctly.</p>}
      </div>
    </div>
  );
};

export default Contact;
