import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>active link tryouts</title>
      </Head>
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
