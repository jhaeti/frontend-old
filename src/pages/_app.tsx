import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { SWRDevTools } from "swr-devtools";

import GlobalStyle from "../components/globalstyles";
import { wrapper } from "../redux/store";

const theme: DefaultTheme = {
    colors: {
        primary: "#111",
        secondary: "#0070f3",
    },
};

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <SWRDevTools>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </SWRDevTools>
        </>
    );
}

export default wrapper.withRedux(App);
