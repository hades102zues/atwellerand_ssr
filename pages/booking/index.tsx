import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../../HtmlHead";
import PageLayout from "../../shared/PageLayout/PageLayout";
import Bookingpage from "../../Book/Book";

export default function Booking() {
  return (
    <div className="booking">
      <HtmlHead
        title="Book Now - ASDA Errand & Rental Service, Barbados"
        contentDescription={"Choose the services which cover your needs."}
      />
      <PageLayout>
        <Bookingpage />
      </PageLayout>
    </div>
  );
}
