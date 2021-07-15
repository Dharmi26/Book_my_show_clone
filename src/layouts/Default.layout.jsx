import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
  return (
    <>
       <Navbar />
       <HeroCarousal />
       {props.children}
    </>
  );
};

export default DefaultLayout;
