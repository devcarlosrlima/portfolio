import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import crud from "../../img/crud.jpg";
import movielist from "../../img/movie list.jpg";
import landingPage from "../../img/landingpage.jpg";
import landingPageMKD from "../../img/landingpageMKD.jpg";
import Calculadora from "../../img/calculadora.jpg";
import PeopleAPI from "../../img/People API.png";
import APIlogin from '../../img/api-login.jpg';
import "./style.scss";
import { FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

const Portdata = [
  {
    id: 2,
    name: "Crud Simples",
    image: crud,
    linkProj: "https://crud-one-ochre.vercel.app/",
    linkRepo: "https://github.com/devcarlosrlima/CRUD",
  },
  {
    id: 2,
    name: "Movie List",
    image: movielist,
    linkProj: "https://movielistf.vercel.app/",
    linkRepo: "https://github.com/devcarlosrlima/MovieList",
  },
  {
    id: 2,
    name: "Landing Page",
    image: landingPage,
    linkProj: "https://first-landing-page-three-tau.vercel.app/",
    linkRepo: "https://github.com/devcarlosrlima/landingpage",
  },
  {
    id: 2,
    name: "Landing Page - MKD",
    image: landingPageMKD,
    linkProj: "https://gluco6naturalhealth.com/",
    linkRepo: "https://github.com/devcarlosrlima/LandingpageMKD",
  },
  {
    id: 2,
    name: "Calculadora",
    image: Calculadora,
    linkProj: "https://calculator-js-fcc.vercel.app/",
    linkRepo: "https://github.com/devcarlosrlima/CalculatorJS",
  },
  {
    id: 3,
    name: 'API de Login e Registro',
    image: APIlogin,
    linkProj: "https://api-login-vnr5.onrender.com",
    linkRepo: "https://github.com/devcarlosrlima/API-login",
  },
  {
    id: 3,
    name: 'People API',
    image: PeopleAPI,
    linkProj: "https://github.com/devcarlosrlima/People-API",
    linkRepo: "https://github.com/devcarlosrlima/People-API",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Todos",
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
        headerText="Meu Portfolio"
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
                    <a  href={item.linkProj} target="_blank">
                    <GoProjectSymlink size={40} />
                    </a>
                     <a   className="linkRepo"                    
                      target="_blank"
                      href={item.linkRepo}
                    >
                      <FaGithub size={40} />
                    </a> 
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
