import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LogsProvider } from '@/context/logContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LogsProvider>
    <Component {...pageProps} />
  </LogsProvider>
  )
}
