import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/noto-sans-jp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <SessionProvider session={session}>
                <Head>
                    <title>Nakama 仲間 Japanese Restaurant</title>
                </Head>

                <NextNProgress
                    color="#352e1d"
                    options={{ showSpinner: false }}
                />
                <Navbar></Navbar>

                <Component {...pageProps} />

                <Footer />
            </SessionProvider>
        </>
    );
}

export default MyApp;
