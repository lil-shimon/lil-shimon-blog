import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Header/>
            {/* @ts-ignore*/}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
