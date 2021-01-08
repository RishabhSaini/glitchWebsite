import React from "react";
import Typical from "react-typical";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Rishabh Saini</h1>
      </div>
      <Typical
        steps={["Hello", 1000, "Hello world!", 500]}
        loop={Infinity}
        wrapper="h1"
        className=""
      />
      <div className="episode">
        <span>Projects</span>
      </div>
    </header>
  );
};

export default Header;
