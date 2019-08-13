import React, { Component } from "react";
import { RoomContext } from ".././context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms, rooms, loading } = this.context;
    let onlyfeatured = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <div className="featured-rooms">
        <Title title="featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : onlyfeatured}
        </div>
      </div>
    );
  }
}
