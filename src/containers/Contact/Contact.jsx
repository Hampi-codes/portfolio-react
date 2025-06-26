import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = {
      access_key: "5dc91eb8-623f-4ac1-915b-477db657a404",
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:yogeshkumar9582264326@gmail.com"
            className="p-text"
            target="_blank"
          >
            yogeshkumar9582264326@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+919891322870" className="p-text" target="_blank">
            +91 9891322870
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__contact-form app__flex"
          onSubmit={handleSubmit}
          // noValidate
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type="submit"
            className="portfolio-button"
            disabled={loading}
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__primarybg"
);
