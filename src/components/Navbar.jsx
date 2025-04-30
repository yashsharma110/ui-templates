import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div
        style={{
          width: "100%",
          height: "80px", // Fixed height for consistency
          borderBottom: "2px solid black",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 0 0 120px",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
          color: "black",
          position: "fixed", // Ensures the navbar stays fixed
          top: 0, // Sticks to the top of the page
          left: 0, // Starts from the left edge
          right: 0, // Spans to the right edge
          zIndex: 1, // High z-index to stay above other elements
        }}
      >
        {/* Logo with Image */}
        <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
          <img
            src="/designNav.PNG" // Replace with the correct path to your image
            alt="Logo"
            style={{ width: "40px", height: "40px" }} // Adjust size as needed
          />
          <div style={{ fontWeight: 100, fontSize: "1.728rem" }}>SNO</div>
        </div>
      </div>

      {/* Gap after Navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Navbar;
