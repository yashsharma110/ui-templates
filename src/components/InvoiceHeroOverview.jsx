import React from "react";

const LandingHero = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      <svg viewBox="0 0 1100 900" className="w-full h-full">
        {/* --- Black background --- */}
        <rect width="1200" height="800" fill="black" />

        {/* --- Blurry Blobs --- */}
        <circle cx="550" cy="450" r="150" fill="white" filter="url(#blur1)" />
        <circle cx="850" cy="650" r="80" fill="white" filter="url(#blur2)" />

        {/* --- Blur Filters --- */}
        <defs>
          <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
          <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
        </defs>

        {/* --- Text and Buttons inside foreignObject --- */}
        <foreignObject x="0" y="0" width="1300" height="400">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              color: "white",
              fontFamily: "Arial, sans-serif",
              padding: "0px 70px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.4",
                maxWidth: "900px",
              }}
            >
              Experience a{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "normal",
                  color: "#ccc",
                }}
              >
                frictionless
              </span>{" "}
              future of finance operations
            </h1>

            <p
              style={{
                fontSize: "26px",
                color: "white",
                marginTop: "20px",
                maxWidth: "900px",
                lineHeight: "1.5",
              }}
            >
              An Invoice processor built for speed, precision and reimagined
              without bottlenecks
            </p>

            <div style={{ marginTop: "30px" }}>
              <button
                style={{
                  padding: "12px 20px",
                  marginRight: "20px",
                  backgroundColor: "#ccc",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                Contact Us
              </button>
              <button
                style={{
                  padding: "12px 20px",
                  backgroundColor: "white",
                  color: "#000",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
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

export default LandingHero;
