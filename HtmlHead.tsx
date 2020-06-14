import Head from "next/head";

interface Props {
  title: string;
  contentDescription: string;
}
const HtmlHead: React.FC<Props> = (props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* IOS Safari Simply rename the original touch icon to produce the precompose */}
      {/* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />  */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      {/* <link rel="apple-touch-icon-precomposed" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon-precomposed.png" />  */}

      {/* //Android Chrome */}
      <link rel="manifest" href="/manifest.json" />
      {/* Android home screen */}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />

      {/*macOS Safari */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00ad26" />

      {/* IE and Edge */}
      {/* <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="msapplication-config" content="%PUBLIC_URL%/browserconfig.xml" />  */}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* Legacy Browsers */}

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* To show icon in search results. NOTE*** the favicon.ico must be a multiple of 48x48 OR IT WILL NOT SHOW IN RESULTS */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Site Ownership */}
      <meta
        name="google-site-verification"
        content="TE9BbEIc_lk2K2wuEZO_HOkQ2IYGx_wHyajLgZCIAHI"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />

      <link rel="canonical" href="https://asdaservicesbds.com" />
      <meta name="description" content={props.contentDescription} />
      <meta name="robots" content="noindex" />

      <meta name="theme-color" content="#ffffff" />
      <meta name="theme-color" content="#000000" />

      <title>{props.title}</title>
    </Head>
  );
};

export default HtmlHead;
