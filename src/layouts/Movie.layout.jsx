import React from "react";

// Components
import MovieNavbar from "../components/Navbar/navbar.components";

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
