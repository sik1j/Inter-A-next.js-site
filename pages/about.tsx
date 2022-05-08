import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inter-A | About</title>
      </Head>
      <div className="">
        <Nav />
      </div>
    </>
  );
};

export default About;
