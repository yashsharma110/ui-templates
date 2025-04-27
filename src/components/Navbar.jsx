import React from "react";

const Navbar = () => {
  return (
    <div className="w-full z-1">
      <svg viewBox="0 0 1620 80" className="w-full h-20">
        {/* Black background */}
        <rect width="100%" height="120" fill="black" />

        {/* Logo and navigation items using foreignObject for HTML */}
        <foreignObject x="0" y="0" width="1520" height="80">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              padding: "0 120px",
              fontFamily: "Arial, sans-serif",
              color: "white",
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

            {/* Contact button */}
            <div>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Navbar;
