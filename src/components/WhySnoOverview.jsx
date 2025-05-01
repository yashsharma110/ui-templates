import React from "react";

const WhySnoOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        fontFamily: "Satoshi",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.078rem",
          fontWeight: 400,
          textAlign: "start",
          marginBottom: "54px",
          lineHeight: 1.2,
        }}
      >
        Why SNO is your one-stop tool for invoice processing?
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "115px",
        }}
      >
        {/* Card 1 */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: "1.728rem",
              fontWeight: 900,
              marginBottom: "32px",
            }}
          >
            Frictionless Invoice Intake
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.17,
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
              fontSize: "1.728rem",
              fontWeight: 900,
              marginBottom: "32px",
            }}
          >
            Instant Processing
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.17,
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
              fontSize: "1.728rem",
              fontWeight: 900,
              marginBottom: "32px",
            }}
          >
            Human-augmented Layer
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.17,
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
