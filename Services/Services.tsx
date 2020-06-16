import React from "react";

import Showcase from "./Sections/MiniShowcase/MiniShowcase";

import _Services from "../shared/Services/Services";
import Pricing from "../shared/Pricing/Pricing";

const Services: React.FC = () => {
  return (
    <div className="services">
      <Showcase />
      <_Services showHeader={false} />
      <Pricing />
    </div>
  );
};

export default Services;
