import React from "react";

const LandingOverview = () => {
  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <svg viewBox="0 0 1200 800" className="w-full h-full">
        {/* --- Hero Section --- */}
        <foreignObject x="0" y="0" width="560" height="300">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <h1
              style={{
                fontSize: "36px",
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
                fontSize: "22px",
                marginTop: "30px",
                lineHeight: 1.5,
                color: "#333",
              }}
            >
              Receive highly accurate invoice data—99.9% precise—within 24
              hours. Our AI extracts and verifies the information
              through three layers, followed by a final human check,
              ensuring clean, error-free data delivered in your preferred
              format for effortless accounting.
            </p>
            <div style={{ marginTop: "30px" }}>
              <button
                style={{
                  padding: "10px 18px",
                  marginRight: "12px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Contact Us
              </button>
              <button
                style={{
                  padding: "10px 18px",
                  backgroundColor: "#ccc",
                  color: "#000",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </foreignObject>

        {/* --- Black Box on Right --- */}
        <rect x="620" y="0" width="590" height="363" fill="#000" />

        {/* --- Impact in Numbers --- */}
        <foreignObject x="0" y="420" width="1200" height="160">
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              margin: "20px 0",
              lineHeight: 2,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Our Impact in Numbers
          </p>

          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
            }}
          >
            {[
              ["60%", "Reduction in Cost per Invoice Processed"],
              ["98%", "Decrease in Invoice Processing Time"],
              ["99%", "Ensuring Data Accuracy"],
              ["100%", "On-time Data Delivery"],
            ].map(([num, label], i) => (
              <div key={i} style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "8px",
                    color: "#555",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </foreignObject>

        {/* --- Logos Ticker --- */}
        <text
          x="0"
          y="700"
          fontSize="24"
          fontFamily="Arial, sans-serif"
          fill="#000"
          fontWeight={700}
        >
          Leading Teams at
          <tspan x="0" dy="25">
            companies using SNO{" "}
          </tspan>
        </text>

        {/* --- Logos strip --- */}
        <foreignObject x="270" y="670" width="1200" height="130">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="scrollbar-hide"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              backgroundColor: "#000",
              padding: "16px 0",
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
                  margin: "0 24px",
                  fontSize: "24px",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default LandingOverview;
