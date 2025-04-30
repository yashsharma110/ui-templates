import React from "react";

const LandingOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        padding: "120px 0 0 0",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          minHeight: "363px",
          gap: "20px",
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
              fontSize: "clamp(2.488rem, 5vw, 2.488rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Absolute{" "}
            <span style={{ fontStyle: "italic", fontWeight: 100, color: "#333" }}>
              Accuracy
            </span>{" "}
            <span style={{ fontWeight: 700 }}>Now</span> Made Possible
          </h1>
          <p
            style={{
              fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
              lineHeight: 1.2,
              color: "black",
            }}
          >
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "20px" }}>
            <button
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              Contact Us
            </button>
            <button
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#ccc",
                color: "#000",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem",
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
          marginTop: "124px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Our Impact in Numbers
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
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
                minWidth: "100px",
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
                  fontSize: "clamp(0.833rem, 1vw, 0.833rem)",
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
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
          backgroundColor: "#fff",
          padding: "0",
        }}
      >
        {/* Logos Title and Strip in Same Line */}
        <div
          style={{
            display: "flex",
            alignItems: "center", // Align items vertically in the center
            justifyContent: "start", // Space between the title and logos
            width: "100%",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
              fontWeight: 700,
              color: "#000",
              margin: 0,
            }}
          >
            Leading Teams at{" "}
            <p
              style={{
                fontSize: "clamp(1.2rem, 1vw, 1.2rem)",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              companies using SNO
            </p>
          </p>

          {/* Logos Strip */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "start",
              gap: "50px",
              backgroundColor: "#000",
              padding: "10px 0",
            }}
          >
            {[
              "Kontinu Consultancy B.V.",
              "KPMG",
              "EY",
              "Deloitte",
              "Apollo",
            ].map((name, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  color: "#fff",
                  fontWeight: 700,
                  margin: "0 10px",
                  fontSize: "clamp(1.5rem, 1.5vw, 2rem)",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingOverview;
