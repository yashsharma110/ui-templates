import React from "react";

const LandingOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          minHeight: "400px",
          gap: "32px",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: "0 0 50%",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Absolute{" "}
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              Accuracy
            </span>{" "}
            <span style={{ fontWeight: 700 }}>Now</span> Made Possible
          </h1>
          <p
            style={{
              fontSize: "clamp(1.25rem, 1vw, 1.5rem)",
              marginTop: "30px",
              lineHeight: 1.5,
              color: "#333",
            }}
          >
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div style={{ marginTop: "30px", display: "flex", gap: "12px" }}>
            <button
              style={{
                padding: "14px 24px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              Contact Us
            </button>
            <button
              style={{
                padding: "14px 24px",
                backgroundColor: "#ccc",
                color: "#000",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Black Box */}
        <div
          style={{
            flex: "1 1 40%",
            backgroundColor: "#000",
            minHeight: "300px",
          }}
        ></div>
      </div>

      {/* Our Impact in Numbers */}
      <div
        style={{
          boxSizing: "border-box",
          textAlign: "start",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 1vw, 2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Our Impact in Numbers
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            textAlign: "start",
            gap: "20px",
          }}
        >
          {[
            ["60%", "Reduction in Cost per Invoice Processed"],
            ["98%", "Decrease in Invoice Processing Time"],
            ["99%", "Ensuring Data Accuracy"],
            ["100%", "On-time Data Delivery"],
          ].map(([num, label], i) => (
            <div
              key={i}
              style={{
                flex: "1 1 200px",
                minWidth: "200px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2rem, 2vw, 3rem)",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1vw, 0.5rem)",
                  marginTop: "8px",
                  color: "#555",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logos Section */}
      <div
        style={{
          padding: "0",
          fontSize: "clamp(1rem, 1vw, 2rem)",
          fontWeight: 700,
          color: "#000",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          Leading Teams at companies using SNO
        </p>
      </div>

      {/* Logos Strip */}
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          backgroundColor: "#000",
          padding: "16px 0",
          boxSizing: "border-box",
        }}
      >
        {["Kontinu Consultancy B.V.", "KPMG", "EY", "Deloitte", "Apollo"].map(
          (name, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                color: "#fff",
                fontWeight: 700,
                margin: "0 24px",
                fontSize: "clamp(1.5rem, 1.5vw, 2rem)",
                whiteSpace: "nowrap", // To prevent company names from breaking into two lines
              }}
            >
              {name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default LandingOverview;
