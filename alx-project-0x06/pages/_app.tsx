import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CountProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountProvider>
    </Provider>
  );
}
