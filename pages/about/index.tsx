import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Head from "next/head";
import HtmlHead from "../../HtmlHead";
import { useRouter } from "next/router";

import Aboutpage from "../../About/About";
import PageLayout from "../../shared/PageLayout/PageLayout";

export default function About() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="about">
      <HtmlHead
        title="About - ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "We are a family centered business in Barbados that caters to all areas of the market."
        }
      />
      <PageLayout>
        <Aboutpage />
      </PageLayout>
    </div>
  );
}
