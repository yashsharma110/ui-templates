import React from "react";
import ProcessOverview from "./components/ProcessOverview";
import ExtractOverview from "./components/ExtractOverView";
import VerifyOverview from "./components/VerifyOverView";
import DeliverOverview from "./components/DeliverOverView";
import AdvantagesOverview from "./components/AdvangesOverView";
import Advantages from "./components/Advantages";
import WhySnoOverview from "./components/WhySnoOverview";
import TestimonialOverview from "./components/TestimonialOverview";

function App() {
  return (
    <>
      {/* Horizontal scroll for first four pages */}
      <div className="flex w-full h-screen overflow-x-auto overflow-y-hidden scrollbar-hide">
        {/* Page 1: Process Overview */}
        <div className="flex-shrink-0 w-screen h-full">
          <ProcessOverview />
        </div>

        {/* Page 2: Extract Overview */}
        <div className="flex-shrink-0 w-screen h-full">
          <ExtractOverview />
        </div>

        {/* Page 3: Verify Overview */}
        <div className="flex-shrink-0 w-screen h-full">
          <VerifyOverview />
        </div>

        {/* Page 4: Deliver Overview */}
        <div className="flex-shrink-0 w-screen h-full">
          <DeliverOverview />
        </div>
      </div>

      {/* Vertical scroll for Advantages page */}
      <div className="w-full h-screen overflow-y-auto">
        <AdvantagesOverview />
      </div>
      {/* Another vertical section below Advantages */}
      <div className="w-full h-screen">
        <Advantages />
        <WhySnoOverview />
        <TestimonialOverview />
      </div>
      {/* <div className="w-full h-screen">
        <WhySnoOverview />
      </div> */}
    </>
  );
}

export default App;
