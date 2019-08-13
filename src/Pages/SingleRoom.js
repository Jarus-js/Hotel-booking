import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
export default class SingleRoom extends Component {
  static contextType = RoomContext;
  state = {
    slug: this.props.match.params.slug,
    defaultBcg
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h2>No Such Room Could Be Found...</h2>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    //console.log("fotos", mainImg);
    // console.log("fotos", defaultImg);
    return (
      <Fragment>
        <Hero>
          <Banner title={`${name} room`}>
            {/* Note it */}
            <img src={images[0] || this.state.defaultBcg} alt="foto" />
            <Link to="/" className="btn-primary">
              Back To Home
            </Link>
          </Banner>
        </Hero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt="pic" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info:</h3>
              <h6>price:Rs {price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets are allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}> -{extra}</li>;
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}
