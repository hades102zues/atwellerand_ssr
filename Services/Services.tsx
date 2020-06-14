import React from "react";

import Showcase from "./Sections/MiniShowcase/MiniShowcase";
// import Services from "./Sections/Services/Services";
// import Pricing from "./Sections/Pricing/Pricing";

import Services from "../shared/Services/Services";
import Pricing from "../shared/Pricing/Pricing";

const services: React.FC = () => {
  return (
    <div className="services">
      <Showcase />
      <Services showHeader={false} />
      <Pricing />
    </div>
  );
};

export default services;
