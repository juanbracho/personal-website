import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState(""); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setResultType("");

    const formData = new FormData(event.target);

    // Web3Forms access key
    const ACCESS_KEY = "53f487f2-2a36-472c-bc72-01607c7340dc";

    if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      // Fallback: Use mailto link if no API key is set
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      const mailtoLink = `mailto:juan.bracho.avila@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
      window.location.href = mailtoLink;
      setResult("Opening your email client...");
      setResultType("success");
      return;
    }

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setResultType("success");
        event.target.reset();
      } else {
        setResult("Failed to send. Please try again.");
        setResultType("error");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      setResult("Error occurred. Please try again.");
      setResultType("error");
      console.error("Submission Error:", error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="mono">Let's connect and discuss opportunities</p>
      </div>

      <div className="content-wrapper">
        <section className="contact-container">
          <form onSubmit={onSubmit} className="contact-form brutal-card">
            <div className="form-group">
              <label htmlFor="name" className="mono">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="mono">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="mono">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message here..."
                required
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="brutal-button submit-button">
              Send Message
            </button>
          </form>

          {result && (
            <div className={`form-status ${resultType}`}>
              {result}
            </div>
          )}

          <div className="contact-info">
            <h3 className="mono">Other Ways to Connect</h3>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link brutal-card"
              >
                <span className="mono">LinkedIn</span>
              </a>
              <a
                href="https://github.com/juanbracho"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link brutal-card"
              >
                <span className="mono">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
