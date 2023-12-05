import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Analytics } from '@vercel/analytics/react'; 

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
