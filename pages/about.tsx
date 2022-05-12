import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/about/Hero";
import Layout from "../components/layout/Layout";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inter-A | About</title>
      </Head>
      <div className="">
        <Layout>
          <div className="flex flex-col gap-y-sect md:mt-28 lg:gap-y-lg-sect">
            <Hero />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default About;
