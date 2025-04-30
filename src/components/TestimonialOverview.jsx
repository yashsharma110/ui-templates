import React from "react";

const TestimonialOverview = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "clamp(2.448rem, 3vw, 2.448rem)",
          fontWeight: 700,
          textAlign: "start",
          maxWidth: "1200px",
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        SNO helped us streamline our Invoice Processing at the right time
      </h2>

      {/* Content Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "54px",
          width: "100%",
          maxWidth: "1100px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* For large screens flex row */}
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth >= 768 ? "row" : "column",
              gap: "32px",
            }}
          >
            {/* Left: Black Box */}
            <div
              style={{
                flex: 1,
                backgroundColor: "black",
                width: "100%",
                aspectRatio: "16 / 9",
              }}
            />

            {/* Right: Testimonial Box */}
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
              <p
                style={{
                  fontSize: "clamp(1.44rem, 2vw, 1.44rem)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                While we were clocking 20K invoices a month & faced friction in
                operations, their expertise not only helped save thousands of
                dollars, but also brought down the manual headcount from 8 to
                just 1 & cut time required by 88%, which was a huge boost for
                us.
              </p>

              {/* Author Info */}
              <div style={{ marginTop: "16px" }}>
                <p
                  style={{
                    fontSize: "clamp(1.448rem, 2vw, 1.448rem)",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Mr Hans
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.448rem, 2vw, 1.448rem)",
                    fontWeight: 600,
                    margin: "16px 0 0 0",
                  }}
                >
                  CEO
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.448rem, 2vw, 1.448rem)",
                    fontWeight: 600,
                    margin: "16px 0 0 0",
                  }}
                >
                  Kontinue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOverview;
