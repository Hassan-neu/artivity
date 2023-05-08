import "@/styles/globals.css";
import Layout from "@/components/layout";
import { StateContext } from "@/hooks/stateContext";
export default function App({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}
