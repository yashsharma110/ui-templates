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
      }}
    >
      {/* Left side content */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px", // Limit the width of the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align content at the top
          gap: "2rem",
          overflow: "hidden", // Prevent horizontal and vertical scrolling
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3vw, 3.5rem)",
            fontWeight: 600,
            lineHeight: "1.2",
            margin: "2rem 0 ",
          }}
        >
          MultiLayered Advantages
        </h2>

        {/* Advantage List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
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
                fontSize: "clamp(1.25rem, 2vw, 2rem)",
                fontWeight: "bold",
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
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              padding: "1rem 2rem",
              backgroundColor: "black",
              color: "white",
              border: "none",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
          <button
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#e0e0e0",
              color: "black",
              border: "none",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              cursor: "pointer",
            }}
          >
            Learn More
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
