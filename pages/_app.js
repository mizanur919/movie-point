import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Meta from "components/meta";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
