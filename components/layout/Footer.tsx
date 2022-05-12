import React from "react";
import Button from "../Button";
import Sect from "../Sect";
import Link from "next/link";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <Sect className={`pb-8 relative mt-24 pt-4 lg:mt-28 lg:pt-10`}>
      <span className="absolute inset-0 bottom-auto -top-10 bg-text-grey h-1 w-[90vw] mx-auto" />
      <div className="flex gap-[7.5vw]">
        <div className="flex flex-col gap-5 flex-1 ">
          <div className="text-primary font-semibold text-logo-ftr">
            <Link href="/">
              <a>Inter-A</a>
            </Link>
          </div>
          <div className="text-ftr text-text-dark leading-6">
            Inter-A is a highschool program that provides an education for youth
            that will lead the future
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="font-semibold text-md text-text-dark">
            Get in touch with Us
          </div>
          <div className="text-ftr text-text-dark leading-6">
            Need Answers? Need help ? Just send us a message
          </div>
          <Button href="/contact" chevron className="flex justify-center w-fit">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="hidden sm:flex mt-16 justify-between text-primary ">
        <a
          href="https://www.facebook.com/social.intera/"
          rel="noreferrer"
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-facebook h-10 mx-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <div className="text-text-dark">Facebook</div>
        </a>
        <a
          href="https://www.instagram.com/social_intera/?hl=en"
          rel="noreferrer"
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-instagram h-10 mx-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          <div className="text-text-dark">Instagram</div>
        </a>
        <a
          href="https://legacy.surreyschools.ca/schools/queene/Pages/default.aspx"
          rel="noreferrer"
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-mortarboard h-10 mx-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
          </svg>
          <div className="text-center text-text-dark">
            Queen Elizabeth <br /> Secondary
          </div>
        </a>
        <a
          href="https://www.surreyschools.ca/"
          rel="noreferrer"
          target={"_blank"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-up-right-circle h-10 mx-auto mb-4"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
          <div className="text-text-dark">Surrey Schools</div>
        </a>
      </div>
    </Sect>
  );
};

export default Footer;
