import React from "react";

const WhySnoOverview = () => {
  return (
    <div className="w-full h-[30%] bg-white">
      <svg viewBox="0 0 1500 200" className="w-full h-full">
        {/* Text and layout via foreignObject for consistent styling */}
        <foreignObject x="0" y="0" width="1200" height="300">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: "Arial, sans-serif",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "100%",
              height: "20%",
              padding: "0",
            }}
          >
            {/* Main heading */}
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 50,
                margin: 0,
                marginBottom: "16px",
              }}
            >
              Why SNO is your one-stop tool for invoice processing?
            </h2>

            {/* Three-column grid for features */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px",
                flexGrow: 1,
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  Frictionless Invoice Intake
                </h3>
                <p style={{ fontSize: "20px", lineHeight: 1.5, margin: 0 }}>
                  Fetch invoices from emails, cloud drives, and uploads with no
                  need for manual sorting.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  Instant Processing
                </h3>
                <p style={{ fontSize: "20px", lineHeight: 1.5, margin: 0 }}>
                  Reduce turnaround time, accelerate approvals & keep up with
                  the AP workflows consistently.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  Human-augmented layer
                </h3>
                <p style={{ fontSize: "20px", lineHeight: 1.5, margin: 0 }}>
                  Alongside automation, every invoice would be reviewed by
                  accounting experts within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default WhySnoOverview;
