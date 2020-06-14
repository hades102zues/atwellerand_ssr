import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../../HtmlHead";
import PageLayout from "../../shared/PageLayout/PageLayout";
import ContactPage from "../../Contact/Contact";

export default function Contact() {
  return (
    <div className="services">
      <HtmlHead
        title="Contact - ASDA Errand & Rental Service, Barbados"
        contentDescription={"Need to ask a question? Fill out the form below!"}
      />
      <PageLayout>
        <ContactPage />
      </PageLayout>
    </div>
  );
}
