// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Virion Labs</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="theme-style-mode" content="1" />
      </Head>
      <Component {...pageProps} />
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      {/* <!-- Start Top To Bottom Area  --> */}
      <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!-- End Top To Bottom Area  --> */}
      {/* <!-- JS ============================================ --> */}
      {/* <!-- main JS --> */}

      <Script strategy="beforeInteractive" src="/assets/js/vendor/jquery.js" />
      <Script strategy="beforeInteractive" src="/assets/js/vendor/jquery.nice-select.min.js" />
      <Script  src="/assets/js/vendor/jquery-ui.js" />
      <Script  src="/assets/js/vendor/modernizer.min.js" />
      <Script strategy="beforeInteractive"  src="/assets/js/vendor/feather.min.js" />
      <Script strategy="beforeInteractive"  src="/assets/js/vendor/slick.min.js" />
      <Script  src="/assets/js/vendor/bootstrap.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/vendor/sal.min.js" />
      <Script  src="/assets/js/vendor/particles.js" />
      <Script  src="/assets/js/vendor/jquery.style.swicher.js" />
      <Script strategy="beforeInteractive"  src="/assets/js/vendor/js.cookie.js" />
      <Script  src="/assets/js/vendor/count-down.js" />
      <Script  src="/assets/js/vendor/isotop.js" />
      <Script  src="/assets/js/vendor/imageloaded.js" />
      <Script  src="/assets/js/vendor/backtoTop.js" />
      <Script  src="/assets/js/vendor/odometer.js" />
      <Script  src="/assets/js/vendor/jquery-appear.js" />
      <Script   src="/assets/js/vendor/scrolltrigger.js" />
      <Script  src="/assets/js/vendor/jquery.custom-file-input.js" />
      <Script  src="/assets/js/vendor/savePopup.js" />
      <Script strategy="beforeInteractive" src="/assets/js/vendor/vanilla.tilt.js" />

      <Script strategy="afterInteractive" src="/assets/js/main.js" />
      {/* <!-- Meta Mask  --> */}

      <Script  src="/assets/js/vendor/web3.min.js" />
      <Script  src="/assets/js/vendor/maralis.js" />
      <Script  src="/assets/js/vendor/nft.js" />
    </>
  );
}

export default MyApp;
