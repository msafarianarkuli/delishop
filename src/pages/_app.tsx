import type {AppProps} from "next/app";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import Template from "template";
import Head from "next/head";
import {useEffect, useState} from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";
import wrapper from "redux/store";
import "styles/globals.scss";
import {ToastContainer} from "react-toastify";

function App({Component, ...rest}: AppProps) {
  const {
    store,
    props: {pageProps},
  } = wrapper.useWrappedStore(rest);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/serviceWorker.js");
    }
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <title>دلی شاپ</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
              <Template>
                <ToastContainer
                  position="bottom-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  closeOnClick={true}
                  pauseOnHover={true}
                  rtl={true}
                  draggable={true}
                  theme="light"
                />
                <Component {...pageProps} />
              </Template>
            </Provider>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default App;
