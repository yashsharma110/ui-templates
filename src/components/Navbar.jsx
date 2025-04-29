import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div
        style={{
          width: "100%",
          height: "80px",
          borderBottom: "2px solid black",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
          color: "black",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: "24px" }}>SNO</div>

        {/* Nav Items */}
        <div style={{ display: "flex", gap: "40px" }}>
          {["Home", "Features", "Use Cases", "Pricing", "About Us"].map(
            (item, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Gap after Navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Navbar;
