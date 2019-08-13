import React, { Component, Fragment } from "react";
import { items } from "./data";

//import { client } from "./Contentful";
const RoomContext = React.createContext();
//Room Provider
class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    // client
    //   .getEntries({
    //     content_type: "hotelvalley"
    //   })
    //   .then(response => this.formatData(response.items))
    //   .catch(console.error);
    this.formatData(items);
  }

  formatData = items => {
    let formattedRooms = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, id, images }; //all rooms
      // console.log("formatdata", room);
      return room;
    });
    //return formattedData;

    let featuredRooms = formattedRooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...formattedRooms.map(room => room.price));
    let maxSize = Math.max(...formattedRooms.map(room => room.size));
    //console.log("maxP", maxPrice); NaN
    this.setState(
      {
        rooms: formattedRooms,
        featuredRooms, //jun jun ma featured property true xa tyo matra
        sortedRooms: formattedRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      },
      state => {
        //console.log("All", rooms);
        // console.log("Only Featured", featuredRooms);
      }
    );
  };

  //just hamle pass garek Id ra db ma vako Id match garxa ki nai ?
  getRoom = slug => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    //state ma type ko value change garne.
    {
      const target = e.target;
      //value vaneko type ho e.g: single,double
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = e.target.name; //form wala name
      // console.log(e);
      this.setState(
        {
          //value vaneko type ho e.g: single,double
          [name]: value
        },
        this.filterRooms
      );
    }
  };

  filterRooms = () => {
    {
      let {
        rooms,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
      } = this.state;
      //all the rooms
      let tempRooms = [...rooms];

      //transform value
      capacity = parseInt(capacity);

      //filter by type
      if (type !== "all") {
        //type all xaina vane filter garne else show tempRooms;
        tempRooms = tempRooms.filter(room => room.type === type); //jun room type select garxa tehi matra rakhne.
      }

      //filter by capacity
      //state ma already 1 xa so data ma 1 vanda thulo or equal
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }

      //filter by price
      tempRooms = tempRooms.filter(room => room.price <= price);

      //filter by size
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );

      //filter by pets
      if (pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }
      //filter by breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }

      //change state
      this.setState({
        sortedRooms: tempRooms
      });
    }
  };

  render() {
    // console.log("final", this.state);
    return (
      <Fragment>
        <RoomContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}
        </RoomContext.Provider>
      </Fragment>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
  {
    /* HOC */
  }
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
        {/* returning comp with props & cont*/}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };
