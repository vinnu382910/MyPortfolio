import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9jxfssg',
        'template_0a1dtvd',
        form.current,
        'oe35cMOq6Ysi8vAQm' // Public Key should be passed as string
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-cont" id="contactus">
      <div className="form-container">
        <p className="title">Contact Me</p>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input type="text" name="from_name" id="username" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="from_email" id="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="textArea"
              name="message"
              id="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button className="sign" type="submit">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#02a6f7"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  />
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>

        <div className="social-message">
          <div className="line"></div>
          <p className="message">Social Accounts</p>
          <div className="line"></div>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com/mr_dio__07/" target="_blank" rel="noreferrer">
            <button className="icon" aria-label="Instagram">
              <img
                src="https://img.icons8.com/?size=100&id=43625&format=png&color=000000"
                alt="Instagram Logo"
                className="logo"
              />
            </button>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <button className="icon" aria-label="Facebook">
              <img
                src="https://img.icons8.com/?size=100&id=118501&format=png&color=000000"
                alt="Facebook Logo"
                className="logo"
              />
            </button>
          </a>
          <a href="https://github.com/vinnu382910" target="_blank" rel="noreferrer">
            <button className="icon" aria-label="GitHub">
              <img
                src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000"
                alt="GitHub Logo"
                className="logo"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
