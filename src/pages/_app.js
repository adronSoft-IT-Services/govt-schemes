import ClientRoot from '@/app/ClientRoot';
import '../app/globals.css';
import Router from "next/router";
import React from 'react';
import FullPageLoader from '@/components/common/FullPageLoader';

export const metadata = {
  title: 'Govt. Schemes'
}
export default function App({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      const start = () => {
        console.log("start");
        setLoading(true);
      };
      const end = () => {
        console.log("finished");
        setLoading(false);
      };
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    }, []);
    return (
        <ClientRoot>
            <Component {...pageProps} />
            {loading ? <FullPageLoader /> : ''}
        </ClientRoot>
    )
}