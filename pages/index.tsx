import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inter-A | Home</title>
      </Head>
      <Nav />
    </>
  );
};

export default Home;
