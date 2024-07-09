import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import image1 from "../../img/image1.jpg";

import "./style.scss";

const Portdata = [
  {
    id: 3,
    name: "Task Management System",
    image: image1,
    link: "https://github.com/devcarlosrlima/Task-Management-System/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Front End",
  },
  {
    filterId: 3,
    label: "Back End",
  },
  {
    filterId: 4,
    label: "FullStack",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const [hovereValue, setHoveredValue] = useState(null);

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredvalue === 1
      ? Portdata
      : Portdata.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              key={`cardItem${item.name.trim()}`}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div className="overlay">
                {index === hovereValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link}>Visit</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
