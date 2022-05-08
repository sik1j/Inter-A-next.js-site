import React from "react";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div>
      <div>DigitUX</div>
      <nav>
        <li>
          <a href="">Home</a>
        </li>
      </nav>
      <div>
        <button>Get a Quote</button>
      </div>
    </div>
  );
};

export default Nav;
