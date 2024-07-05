import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Carlos Lima",
  },
  {
    label: "Age",
    value: "26",
  },
  {
    label: "Address",
    value: "Maceió, Alagoas, Brasil",
  },
  {
    label: "Email",
    value: "dev.frontcarloslima@gmail.com",
  },
  {
    label: "Contact No",
    value: "+55 82999953064",
  },
];

const jobSummary = `
  My name is Carlos Lima, I was born in 1997 and I am 26 years old. I started programming at the age of 20, creating landing pages for family and friends as a hobby. I did it because I enjoyed it. It was only in 2023, when I was about to turn 25, that I started taking it seriously. I began studying how software works and how I could reach that level. I dedicated myself and really studied programming languages, finding it quite easy to learn them. I think I have a talent for this, but I also like to believe that effort and hard work helped a lot. It didn't take me long to master some languages like Java and JavaScript, as well as frameworks like React.
  
  Currently, I am studying Software Engineering at Faculdade Ampli. I hope to graduate soon and get my diploma, but more than that, I hope to work at a good company and put into practice everything I've studied and practiced, both during my solo studies and my time at the university.
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <div className="about__summary">
              {jobSummary.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInfoHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <DiAndroid color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <FaDatabase color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <DiApple color="var(--yt-main-color)" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
