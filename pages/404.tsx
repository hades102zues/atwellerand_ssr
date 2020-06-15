import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import HtmlHead from "../HtmlHead";
import Unkownpage from "../UnknownRoute/UnknownRoute";

export default function Custom404() {
  return (
    <div className="custom404">
      <HtmlHead
        title="Not Found - ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "Located in Barbados, ASDA Errand & Rental Services is dedicated to saving you time, stress and all at a valued price! Visit our main website..."
        }
        canonical="https://asdaservicesbds.com/404"
      />
      <Unkownpage />
    </div>
  );
}
