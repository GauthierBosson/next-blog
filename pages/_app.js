import "../styles/globals.css";
import UserContext from "../lib/context/UserContext";

import { SWRConfig } from "swr";
import Amplify from "aws-amplify";
import { Provider } from "next-auth/client";

Amplify.configure({
  Auth: {
    identityPoolID: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
    region: process.env.NEXT_PUBLIC_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider
      value={{
        name: null,
        email: null,
      }}
    >
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: async (resource, init) =>
            await fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </SWRConfig>
    </UserContext.Provider>
  );
}

export default MyApp;
