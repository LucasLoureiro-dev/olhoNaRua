import Image from "next/image";
import styles from "./page.module.css";
import axios from 'axios'
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <h1> Página inicial </h1>
      <p><Link href="/cadastro/">Fazer cadastro</Link></p>
      <p><Link href="/login/">Fazer login</Link></p>
    </>
  );

}
