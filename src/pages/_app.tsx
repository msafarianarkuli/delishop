import type {AppProps} from "next/app";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import Template from "template";
import Head from "next/head";
import {useState} from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import {Provider} from "react-redux";
import wrapper from "redux/store";
import "styles/globals.scss";
import "assets/fonts/IRANSans.css";

function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
        <title>دلی شاپ</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          <Provider store={store}>
            <Template>
              <Component {...props.pageProps} />
            </Template>
          </Provider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
