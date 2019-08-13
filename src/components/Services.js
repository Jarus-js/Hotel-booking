import React, { Component } from "react";
import { FaCocktail, FaHiking, FaRss, FaStickerMule } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam minus molestias deserunt eos at nam, cum quis accusantium necessitatibus!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam minus molestias deserunt eos at nam, cum quis accusantium necessitatibus!"
      },
      {
        icon: <FaRss />,
        title: "Free Internet",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam minus molestias deserunt eos at nam, cum quis accusantium necessitatibus!"
      },
      {
        icon: <FaStickerMule />,
        title: "Horse Riding",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam minus molestias deserunt eos at nam, cum quis accusantium necessitatibus!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <div key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
