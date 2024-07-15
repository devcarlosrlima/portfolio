import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Nome:",
    value: "Carlos Lima",
  },
  {
    label: "Idade:",
    value: "26",
  },
  {
    label: "Endereço:",
    value: "Maceió, Alagoas, Brasil",
  },
  {
    label: "Email:",
    value: "dev.frontcarloslima@gmail.com",
  },
  {
    label: "Tel.:",
    value: "+55 82999953064",
  },
];

const jobSummary = `
  eu me chamo Carlos Lima, nasci em 97 e tenho 26 anos, comecei a programar com 20 anos de idade, comecei fazendo landing pages para familiares e amigos, era apenas hobby, fazia aquilo porque eu gostava, somente em 2023 quando eu ja estava pra fazer 25 anos  foi que comecei a me dedicar de verdade a isso, comecei a estudar como softwares funcionavam e como eu conseguiria chegar ate aquele ponto, comecei a me dedicar, estudar de verdade as linguagens de programação e tive grande facilidade em aprender elas, acho que tenho talento pra isso, mas gosto também de acreditar que o esforço e trabalho duro ajudaram bastante, nao demorei muito pra dominar algumas linguagens como Java e JavaScript e framework como React...

Atualmente eu to cursando Engenharia de Software na Faculdade Ampli, espero me formar em breve, e conseguir meu diploma, mas mais do que isso espero que possa conseguir trabalhar em uma boa empresa e colocar em pratica tudo que estudei e pratiquei nesse tempo em que estudei sozinho e também o tempo que estudei na faculdade.
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="Sobre mim"
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
            <h3>Desenvolvedor Full Stack</h3>
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
            <h3 className="personalInfoHeaderText">Informações Pessoais</h3>
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
