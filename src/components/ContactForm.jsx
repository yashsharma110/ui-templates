import React from "react";

const ContactForm = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        padding: "20px 0",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <h1
        style={{
          fontSize: "2.448rem",
          fontWeight: 1000,
          marginBottom: "0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Get in Touch// Simplify your Invoice Processing
      </h1>
      <p
        style={{
          fontSize: "1.44rem",
          color: "#333",
          fontFamily: "Arial, sans-serif",
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
          src="/design2.PNG"
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
  backgroundColor: "black",
  color: "white",
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  border: "none",
  cursor: "pointer",
  width: "170px",
};

export default ContactForm;
