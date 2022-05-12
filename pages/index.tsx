import type { NextPage } from "next";
import Head from "next/head";
import Difference from "../components/index/Difference";
import Family from "../components/index/Family";
import Hero from "../components/index/Hero";
import Ideals from "../components/index/Ideals";
import Operation from "../components/index/Operation";
import Teachers from "../components/index/Teachers";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inter-A | Home</title>
      </Head>
      <Layout>
        <div className="flex flex-col gap-y-sect md:mt-28 lg:gap-y-lg-sect">
          <Hero />
          <Operation />
          <Ideals />
          <Difference />
          <Family />
          <Teachers />
          {/* <Testimonial /> */}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
