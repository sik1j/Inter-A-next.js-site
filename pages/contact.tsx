import React from "react";
import Button from "../components/Button";
import Layout from "../components/layout/Layout";
import SectHeading from "../components/SectHeading";

interface Props {}

const contact: React.FC<Props> = ({}) => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col gap-y-sect md:mt-28 lg:gap-y-lg-sect">
          <div className="container">
            <SectHeading className="text-center ">
              Send Us a Message
            </SectHeading>
            <form
              action=""
              // className="px-8 py-4 max-w-xl mx-auto rounded-md shadow-[0px_5px_15px_5px_rgba(0,0,0,0.3)]  grid grid-cols-11 gap-y-7 mt-14"
              className="px-8 py-4 max-w-xl mx-auto rounded-lg shadow-xl border border-[#a9acaa]  grid grid-cols-11 gap-y-7 "
            >
              <label htmlFor="name" className="col-span-5 ">
                Name
                <input
                  type="text"
                  name="sender_name"
                  id="name"
                  className="rounded w-full"
                  placeholder="Parent Name"
                />
              </label>
              <label htmlFor="email" className="col-span-5 col-end-12">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded w-full"
                  // title="Your email address"
                  placeholder="Email Address"
                />
              </label>
              <label htmlFor="student_name" className="col-span-5 ">
                Student Name
                <input
                  type="text"
                  name="student_name"
                  id="student_name"
                  className="rounded w-full"
                  placeholder="Student Name"
                />
              </label>
              <label htmlFor="student_grade" className="col-span-5 col-end-12">
                Student Grade
                <input
                  type="text"
                  name="student_grade"
                  id="student_grade"
                  className="rounded w-full"
                  placeholder="Student Grade"
                />
              </label>
              <label htmlFor="message" className="col-span-full flex flex-col">
                Message
                <textarea
                  name="message"
                  id="message"
                  className="rounded resize-none h-40"
                  placeholder="Write Your Message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="mx-auto col-span-full bg-white text-secondary hover:bg-secondary hover:text-white transition-colors text-link font-semibold py-4 px-6 rounded-md border-2 border-secondary group"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default contact;
