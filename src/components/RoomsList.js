import React, { Fragment } from "react";
import Room from "./Room";
const RoomsList = props => {
  if (props.rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms match your search</h3>
      </div>
    );
  }
  return (
    <Fragment>
      <section className="roomsList">
        <div className="roomslist-center">
          {props.rooms.map(item => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};
export default RoomsList;
