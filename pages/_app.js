import { SWRConfig } from "swr";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/core";

import "../styles/globals.css";
import Navbar from "../src/components/navbar/Navbar";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (resource, init) =>
          await fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Provider session={pageProps.session}>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
