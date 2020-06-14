import React from "react";

import Services from "../shared/Services/Services";
import Pricing from "../shared/Pricing/Pricing";
import Reviews from "../shared/Reviews/Reviews";
import Describe from "./Sections/About/About";
import PageLayout from "./Sections/PageLayout/PageLayout";

const home: React.FC = () => {
  return (
    <PageLayout>
      <Describe />
      <Services showHeader={true} />
      <Pricing />
      <Reviews />
    </PageLayout>
  );
};

export default home;
