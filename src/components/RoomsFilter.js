import React, { Fragment } from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import Title from "./Title";

const RoomsFilter = ({ room }) => {
  const context = useContext(RoomContext);
  //console.log(context);

  //get Unique Value
  const getUnique = (items, value) => {  //jun items map garnu parne ani tesma hunu parne value
    //items[] bhitra vako value kasari taha hunxa by map
    return [...new Set(items.map(item => item[value]))];
    //hamle value ma vako item xa vane exclude xaina vane include
  };

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //get unique types
  let types = getUnique(room, "type"); //type room ma xaina vane matra rakhxa
  //add all
  types = ["all", ...types];

  //Capacity
  let peoples = getUnique(room, "capacity");

  return (
    <Fragment>
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {/* room.map nagari kina types.map bujna khoj suraj ah buje :p */}
              {types.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end select type*/}

          {/* Guest Capacity */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {/* room.map nagari kina types.map bujna khoj suraj ah buje :p */}
              {peoples.map((people, index) => {
                return (
                  <option value={people} key={index}>
                    {people}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end guest capacity*/}
          {/* room price */}
          <div className="form-group">
            <label htmlFor="price">room price Rs{price}</label>
            <input
              type="range"
              name="price"
              value={price}
              max={maxPrice}
              min={minPrice}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          {/* end of room price*/}
          {/* size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="minSize"
                value={minSize}
                className="size-input"
                onChange={handleChange}
              />
              <input
                type="number"
                name="maxSize"
                id="maxSize"
                value={maxSize}
                className="size-input"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* end of size */}
          {/* extras checkbox */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* end of extras checkbox */}
        </form>
      </section>
    </Fragment>
  );
};
export default RoomsFilter;
