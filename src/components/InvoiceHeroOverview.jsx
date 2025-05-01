import React from "react";

const LandingHero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        alignItems: "flex-start", // <-- move content towards top
        justifyContent: "center",
        padding: "8% 5% 0", // <-- top padding increased
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Blurry Blob 1 */}
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "55%",
          width: "300px",
          height: "300px",
          backgroundColor: "white",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.5,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Blurry Blob 2 */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "80%",
          width: "160px",
          height: "160px",
          backgroundColor: "white",
          borderRadius: "50%",
          filter: "blur(40px)",
          opacity: 0.5,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          color: "white",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.448rem, 5vw, 2.448rem)",
            fontWeight: "1000",
            lineHeight: 1.3,
            margin: 0,
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
            fontSize: "clamp(1.728rem, 3vw, 1.728rem)",
            marginTop: "54px",
            lineHeight: 1.5,
            color: "white",
            fontFamily: "Arial, sans-serif",
          }}
        >
          An Invoice processor built for speed, precision and reimagined without
          bottlenecks
        </p>

        <div style={{ marginTop: "54px", display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "#ccc",
              color: "#000",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Contact Us
          </button>
          <button
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "white",
              color: "#000",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
