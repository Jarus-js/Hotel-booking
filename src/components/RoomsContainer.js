import React, { Fragment } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { WithRoomConsumer } from "../context";

const RoomsContainer = ({ context }) => {
  const { rooms, sortedRooms, loading } = context;
  //console.log("sort", sortedRooms);
  //console.log("rooms", rooms);

  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <RoomsFilter room={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Fragment>
  );
};

export default WithRoomConsumer(RoomsContainer); //Now u have access to context;

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         console.log("RoomsContainer", value);
//         return (
//           <Fragment>
//             <p>Hello RoomsContainer</p>
//             <RoomsFilter />
//             <RoomsList />
//           </Fragment>
//         );
//       }}
//     </RoomConsumer>
//   );
// };
// export default RoomsContainer;
