import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../HtmlHead";
import Homepage from "../Home/Home";

export default function Home() {
  return (
    <div className="main">
      <HtmlHead
        title="ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "Located in Barbados, ASDA Errand & Rental Service is dedicated to handling your errands: saving you time, stress and all at a valued price! Visit our main website..."
        }
        canonical="https://asdaservicesbds.com"
      />
      <Homepage />
    </div>
  );
}
