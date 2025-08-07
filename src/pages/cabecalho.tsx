import React from "react";
import Link from "next/link";
import Head from "next/head";
import image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>Hauscraft</h1>
      </div>
      <div>
        <input type="text" placeholder="Procurar Produtos..."/>
      </div>
      <ul>
        <button>Botao 1</button>
        <button>Botao 2</button>
        <button>Botao 3</button>
      </ul>
    </header>
  );
};

const headerStyles = {
  display: 800,
  justifyContent: "space-between",
};

const buttonContainer = {
  display: "flex",
  gap: "15px",
};

export default Header;