import React from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
const Room = ({ room }) => {
  //console.log("room", room);
  const { name, slug, price, images } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="featuredRooms" />
        <div className="price-top">
          <h6>Rs {price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
// Room.propTypes = {
//   featroom: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     name: PropTypes.arrayOf(PropTypes.string).isRequired
//   })
// };
export default Room;
