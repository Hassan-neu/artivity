import "@/styles/globals.css";
import Layout from "@/components/layout";
import { StateContext } from "@/hooks/stateContext";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <StateContext>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StateContext>
        </SessionProvider>
    );
}
