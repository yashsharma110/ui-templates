import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "40px",
        boxSizing: "border-box", // Ensure padding is included in width
      }}
    >
      {/* Left Logo */}
      <div style={{ flex: "1 1 150px" }}>
        <img
          src="./../public/design3.PNG"
          alt="Logo"
          style={{ width: "197px", height: "197" }}
        />
      </div>

      {/* Right Links */}
      <div
        style={{
          display: "flex",
          flex: "2 1 400px",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {[
          {
            heading: "Pages",
            links: [
              "Home",
              "Our Process",
              "Advantages",
              "White Labeled Services",
            ],
          },
          {
            heading: "Pricing",
            links: ["Scale as You Go", "Enterprise"],
          },
          {
            heading: "Pricing",
            links: ["Scale as You Go", "Enterprise"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.44rem",
                marginBottom: "18px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {section.heading}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontFamily: "Arial, sans-serif",
              }}
            >
              {section.links.map((link, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "18px",
                    color: "#000",
                  }}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
