import type { AppProps} from "next/app";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
     <div className="flex h-screen max-h-screen flex-col items-center overflow-hidden">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
