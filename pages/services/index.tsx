import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../../HtmlHead";

import PageLayout from "../../shared/PageLayout/PageLayout";
import ServicesPage from "../../Services/Services";

export default function Services() {
  return (
    <div className="services">
      <HtmlHead
        title="Services - ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "What we offer at ASDA Errand & Rental Service are a wide variety of services to fit your every need."
        }
        canonical="https://asdaservicesbds.com"
      />
      <PageLayout>
        <ServicesPage />
      </PageLayout>
    </div>
  );
}
