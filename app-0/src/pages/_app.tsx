import "@/styles/globals.css";
import { get } from "http";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout ?? ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
