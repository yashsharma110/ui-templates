import React from "react";

const LandingHero = () => {
  return (
    <div
      style={{
        width: "123%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        alignItems: "start", // <-- move content towards top
        justifyContent: "start",
        padding: "120px 130px", // <-- top padding increased
        boxSizing: "border-box",
        fontFamily: "Satoshi",
        marginLeft: "-130px",
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
          fontFamily: "Satoshi",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.986rem",
            fontWeight: "1000",
            lineHeight: "auto",
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
            fontSize: "2.488rem",
            marginTop: "54px",
            lineHeight: "auto",
            color: "white",
            fontFamily: "Satoshi",
          }}
        >
          An Invoice processor built for speed, precision and reimagined without
          bottlenecks
        </p>

        <div style={{ marginTop: "54px", display: "flex", gap: "16px" }}>
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
          <button
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "#fff",
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
    </div>
  );
};

export default LandingHero;
