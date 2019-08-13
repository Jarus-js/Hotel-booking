import React, { Component, Fragment } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Errors = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </Fragment>
  );
};
export default Errors;
