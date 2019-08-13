import React, { Fragment } from "react";

const Hero = ({ hero, children }) => {
  return (
    <Fragment>
      <header className={hero}>{children}</header>
    </Fragment>
  );
};

Hero.defaultProps = {
  hero: "defaultHero"
};
export default Hero;
