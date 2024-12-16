import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [result, setResult] = useState(""); // To handle submission status

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setResult("Sending...");

    // Collect form data
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      // Send the form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Clear the form
      } else {
        setResult("Failed to submit form. Please try again later.");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Submission Error:", error);
    }
  };

  return (
    <section className="contact-container">
      <h2>Connect With Me</h2>
      <p>Feel free to reach out through the form below:</p>
      <form onSubmit={onSubmit} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" placeholder="Your Name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {result && <div className="form-status">{result}</div>}
    </section>
  );
};

export default ContactUs;
