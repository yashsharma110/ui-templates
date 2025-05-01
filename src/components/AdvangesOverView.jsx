import React from "react";

const AdvantagesOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Ensure the height fills the viewport
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row", // Align content and image side by side
        alignItems: "center", // Center the content vertically
        justifyContent: "flex-start", // Start from the left
        overflow: "hidden", // Prevent horizontal and vertical scrolling
        boxSizing: "border-box",
        fontFamily: "Satoshi",
      }}
    >
      {/* Left side content */}
      <div
        style={{
          width: "100%",
          maxWidth: "700px", // Limit the width of the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align content at the top
          gap: "30px",
          overflow: "hidden", // Prevent horizontal and vertical scrolling
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "2.074rem",
            fontWeight: 400,
            lineHeight: "auto",
          }}
        >
          MultiLayered Advantages
        </h2>

        {/* Advantage List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "54px",
            overflow: "hidden", // Prevent scrolling within this section
          }}
        >
          {[
            "Effortlessly synchronize with existing systems",
            "Adherence to compliance",
            "Smart OCR Capabilities",
            "Mobile App",
            "Easy scalability",
          ].map((advantage, index) => (
            <p
              key={index}
              style={{
                fontSize: "1.728rem",
                fontWeight: "900",
                margin: 0,
              }}
            >
              {advantage}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
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
            }}
          >
            Contact Us
          </button>
          <button
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "#ccc",
              color: "#000",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              width: "137px",
              height: "57px",
              fontFamily: "Satoshi",
              lineHeight: 1.37,
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div
        style={{
          width: "50%",
          maxWidth: "600px", // Limit the width of the image
          marginTop: "0", // Adjust the margin to align the image with the content
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/design.PNG"
          alt="Design illustration"
          style={{
            width: "100%", // Ensure image scales within its container
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default AdvantagesOverview;
