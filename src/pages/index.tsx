import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Cabecalho } from "./cabecalho";
import link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function home(){
  return (
    <main>
      <Cabecalho></Cabecalho>
      <aside></aside>
      <section>
        <div id="filtros">
      </div>
      <Produto></Produto>
      <Produto></Produto>
      <Produto></Produto>
      </section>
      </main>
  );
}


