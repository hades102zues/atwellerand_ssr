import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import Head from "next/head";
import HtmlHead from "../HtmlHead";
import Homepage from "../Home/Home";

export default function Home() {
  return (
    <div className="main">
      <HtmlHead
        title="ASDA Errand & Rental Service, Barbados"
        contentDescription={
          "Located in Barbados, ASDA Errand & Rental Services is dedicated to saving you time, stress and all at a valued price! Visit our main website..."
        }
      />
      <Homepage />
    </div>
  );
}
