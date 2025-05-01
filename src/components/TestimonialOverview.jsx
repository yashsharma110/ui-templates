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
        fontFamily: "Satoshi",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.986rem",
          fontWeight: 900,
          textAlign: "start",
          lineHeight: 1.36,
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
          maxWidth: "1200px",
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
                padding: "2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "590px",
                height: "494px",
              }}
            >
              <p
                style={{
                  fontSize: "2.074rem",
                  lineHeight: 1.2,
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
              <div style={{ marginTop: "1px" }}>
                <p
                  style={{
                    fontSize: "2.074rem",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Mr Hans
                </p>
                <p
                  style={{
                    fontSize: "2.074rem",
                    fontWeight: 700,
                    margin: "10px 0 0 0",
                  }}
                >
                  CEO
                </p>
                <p
                  style={{
                    fontSize: "2.074rem",
                    fontWeight: 700,
                    margin: "10px 0 0 0",
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
