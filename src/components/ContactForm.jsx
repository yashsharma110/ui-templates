import React from "react";

const ContactForm = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        fontFamily: "Satoshi",
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <h1
        style={{
          fontSize: "2.986rem",
          fontWeight: 900,
          marginBottom: "0",
          fontFamily: "Satoshi",
          lineHeight: 1.36,
        }}
      >
        Get in Touch// Simplify your Invoice Processing
      </h1>
      <p
        style={{
          fontSize: "2.488rem",
          color: "#333",
          fontFamily: "Satoshi",
          lineHeight: "auto",
        }}
      >
        Transform your invoice workflow—save time, increase accuracy, and
        elevate your accounting firm today
      </p>
      {/* Left Form Section */}
      <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Phone Number" style={inputStyle} />
          <input type="text" placeholder="Company Name" style={inputStyle} />
          <textarea
            placeholder="Message"
            rows="4"
            style={textareaStyle}
          ></textarea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div style={{ flex: "1 1 300px", textAlign: "center" }}>
        <img
          src="/design2.png"
          alt="Contact illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

// Styles
const inputStyle = {
  flex: 1,
  padding: "12px",
  border: "1px solid #aaa",
  fontSize: "1rem",
};

const textareaStyle = {
  padding: "12px",
  border: "1px solid #aaa",
  fontSize: "1rem",
  resize: "vertical",
};

const buttonStyle = {
  padding: "1rem 1.5rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  width: "137px",
  height: "57px",
  fontFamily: "Satoshi",
  lineHeight: 1.37,
};

export default ContactForm;
