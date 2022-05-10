import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/layout/Nav";
import Hero from "../components/index/Hero";
import Operation from "../components/index/Operation";
import Ideals from "../components/index/Ideals";
import Difference from "../components/index/Difference";
import Family from "../components/index/Family";
import Teachers from "../components/index/Teachers";
import Testimonial from "../components/index/Testimonial";
import Footer from "../components/layout/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inter-A | Home</title>
      </Head>
      <Nav />
      <div className="flex flex-col gap-y-sect sm:bg-emerald-400">
        <Hero />
        <Operation />
        <Ideals />
        <Difference />
        <Family />
        <Teachers />
        {/* <Testimonial /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
