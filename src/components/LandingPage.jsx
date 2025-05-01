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
        fontFamily: "Satoshi",
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
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: "0 0 50%",
            width: "590px",
            height: "363px",
          }}
        >
          <h1
            style={{
              fontSize: "2.986rem",
              fontWeight: 900,
              lineHeight: 1.37,
            }}
          >
            Absolute{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 100, color: "#333" }}
            >
              Accuracy
            </span>{" "}
            <span style={{ fontWeight: 900 }}>Now</span> Made Possible
          </h1>
          <p
            style={{
              lineHeight: 1.17,
              color: "black",
              fontSize: "1rem",
              fontWeight: 500,
              lineHeight: 1.37,
            }}
          >
            Receive highly accurate invoice data—99.9% precise—within 24 hours.
            Our AI extracts and verifies the information through three layers,
            followed by a final human check, ensuring clean, error-free data
            delivered in your preferred format for effortless accounting.
          </p>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px" }}>
            <button
              style={{
                padding: "1rem 1.5rem",
                backgroundColor: "#000",
                color: "#fff",
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
          </div>
        </div>

        {/* Right Black Box */}
        <div style={{ flex: "1 1 150px" }}>
          <img
            src="/design4.png"
            alt="Logo"
            style={{ width: "530px", height: "363px" }}
          />
        </div>
      </div>

      {/* Our Impact in Numbers */}
      <div
        style={{
          boxSizing: "border-box",
          textAlign: "start",
          marginTop: "124px",
          fontFamily: "Satoshi",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            lineHeight: 1.4,
            fontFamily: "Satoshi",
            margin: 0,
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
            fontFamily: "Satoshi",
            gap: "20px",
            marginTop: "20px",
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
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {num}
              </p>
              <p
                style={{
                  fontSize: "0.833rem",
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
          marginTop: "124px",
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
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#000",
              margin: 0,
              lineHeight: 1.37,
            }}
          >
            Leading Teams at{" "}
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.37,
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
              gap: "70px",
              backgroundColor: "#000",
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
                  fontWeight: 400,
                  fontSize: "2.986rem",
                  whiteSpace: "nowrap",
                  fontFamily: "League Gothic",
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
