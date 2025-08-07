import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../pages/cabecalho";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Cabecalho } from "./cabecalho";
import link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} /> </>
  );
}
