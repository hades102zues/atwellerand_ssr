import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../../HtmlHead";

import Aboutpage from "../../About/About";
import PageLayout from "../../shared/PageLayout/PageLayout";

export default function About() {
  return (
    <div className="about">
      <HtmlHead
        title="About - ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "We are a family centered business in Barbados that caters to all areas of the market."
        }
        canonical="https://asdaservicesbds.com/about"
      />
      <PageLayout>
        <Aboutpage />
      </PageLayout>
    </div>
  );
}
