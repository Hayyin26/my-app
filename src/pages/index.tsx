import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
// const [isLogin, setIsLogin] = useState(false);
// const { push } = useRouter();
// useEffect(() => {
//     if (!isLogin) {
//         push("/auth/login");
//     }
// },[]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praktikum Next.Js Pages Router</title>
      </Head>
        <h1>Praktikum Next.js Pages Router</h1><br />
        <p>Mahasiswa D4 Pengembangan Web</p>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
