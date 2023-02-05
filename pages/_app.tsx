import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/layouts/Layout";
import ColorSchemeProvider from "@/components/contexts/ColorSchemeContext";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ColorSchemeProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ColorSchemeProvider>
            <Analytics />
        </>
    );
}
