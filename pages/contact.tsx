import React from "react";
import Button from "../components/Button";
import ContactForm from "../components/contact/ContactForm";
import Layout from "../components/layout/Layout";
import SectHeading from "../components/SectHeading";

interface Props {}

const contact: React.FC<Props> = ({}) => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col gap-y-sect md:mt-28 lg:gap-y-lg-sect">
          <div className="container">
            {/* <SectHeading className="text-center ">
              Send Us a Message
            </SectHeading> */}
            <ContactForm />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default contact;
