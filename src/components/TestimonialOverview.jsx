import React from "react";

const TestimonialOverview = () => {
  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      <svg viewBox="0 0 1200 600" className="w-full h-full">
        {/* Embedding HTML for styling consistency */}
        <foreignObject x="20" y="0" width="1200" height="600">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: "Arial, sans-serif",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "40px",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                margin: 0,
                marginBottom: "16px",
              }}
            >
              SNO helped us streamline our Invoice Processing at the right time
            </h2>

            {/* Content Row */}
            <div style={{ display: "flex", marginTop: "40px", gap: "40px" }}>
              {/* Left placeholder */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "black",
                  aspectRatio: "16/9",
                }}
              />

              {/* Right panel */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f3f3f3",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: 1.5, margin: 0 }}>
                  While we were clocking 20K invoices a month & faced friction
                  in operations, their expertise not only helped save thousands
                  of dollars, but also brought down the manual headcount from 8
                  to just 1 & cut time required by 88%, which was a huge boost
                  for us.
                </p>

                <div style={{ marginTop: "24px" }}>
                  <p style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>
                    Mr Hans
                  </p>
                  <p style={{ fontSize: "14px", margin: "4px 0 0 0" }}>CEO</p>
                  <p style={{ fontSize: "14px", margin: "4px 0 0 0" }}>
                    Kontinue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default TestimonialOverview;
