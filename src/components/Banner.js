import React, { Fragment } from "react";

const Banner = ({ title, subtitle, info, children }) => {
  return (
    <Fragment>
      <div className="banner">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{info}</p>
        {children}
      </div>
    </Fragment>
  );
};

export default Banner;
