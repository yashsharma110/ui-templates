import React from "react";

const WhySnoOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 600,
          textAlign: "start",
          marginBottom: "3rem",
          lineHeight: 1.2,
        }}
      >
        Why SNO is your one-stop tool for invoice processing?
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Card 1 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Frictionless Invoice Intake
          </h3>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            Fetch invoices from emails, cloud drives, and uploads with no need
            for manual sorting.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "3.3rem",
            }}
          >
            Instant Processing
          </h3>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            Reduce turnaround time, accelerate approvals & keep up with the AP
            workflows consistently.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Human-augmented Layer
          </h3>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            Alongside automation, every invoice would be reviewed by accounting
            experts within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySnoOverview;
