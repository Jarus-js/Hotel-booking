import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
class Home extends Component {
  state = {
    services: [
      {
        title: "The Guest Is Equivalent To God",
        subtitle: "We are located @ Teku",
        info: "015540412"
      }
    ]
  };
  render() {
    return (
      <Fragment>
        <Hero>
          <Banner>
            {this.state.services.map((item, index) => {
              return (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <h4>
                    <FaMapMarkerAlt /> {item.subtitle}
                  </h4>
                  <h5>
                    <FaPhone /> {item.info}
                  </h5>
                </div>
              );
            })}
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
      </Fragment>
    );
  }
}
export default Home;
