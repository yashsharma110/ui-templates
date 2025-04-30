import React from "react";
import ProcessOverview from "./components/ProcessOverview";
import ExtractOverview from "./components/ExtractOverView";
import VerifyOverview from "./components/VerifyOverView";
import DeliverOverview from "./components/DeliverOverView";
import AdvantagesOverview from "./components/AdvangesOverView";
import Advantages from "./components/Advantages";
import WhySnoOverview from "./components/WhySnoOverview";
import TestimonialOverview from "./components/TestimonialOverview";
import LandingPage from "./components/LandingPage";
import AutoScrollSection from "./components/AutoScroll";
import Navbar from "./components/Navbar";
import FrictionlessOverview from "./components/InvoiceHeroOverview";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-[120px] pb-[20px]">
      <Navbar />
      <div className="w-full overflow-y-auto mb-[120px]">
        <LandingPage />
      </div>
      <div className="mb-[120px]">
        {/* Horizontal scroll for first four pages */}
        <AutoScrollSection pageCount={4}>
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
        </AutoScrollSection>
      </div>
      {/* Vertical scroll for Advantages page */}
      <div className="w-full h-screen overflow-y-auto mb-[120px]">
        <AdvantagesOverview />
      </div>
      {/* Another vertical section below Advantages */}
      <div className="w-full h-screen">
        <WhySnoOverview />
        <div className="mb-[120px]">
          <TestimonialOverview />
        </div>
        <div className="mb-[120px]">
          <FrictionlessOverview />
        </div>
        <div className="mb-[120px]">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
