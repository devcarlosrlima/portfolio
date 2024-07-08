import React from "react";
import { ReactTyped } from "react-typed";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { SiWhatsapp } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Carlos Lima
          <br />
          <ReactTyped
            strings={[" Full Stack Developer!", "Software Engineer!"]}
            typeSpeed={50}
            backSpeed={60}
            startDelay={100}
            backDelay={2000}
            loop
          />
        </h1>
      </div>

      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <a
            className="download"
            target="_blank"
            href="https://drive.google.com/file/d/17RAU6NbhMVXnBuz8oD7fBZycfW2jnMzD/view?usp=sharing"
            download="Carlos.pdf"
          >
            Download resume
          </a>
          <div>
            <a
              className="socialMedia"
              target="_blank"
              href="https://github.com/devcarlosrlima"
            >
              <FaGithub size={40} />
            </a>
            <a
              className="socialMedia"
              target="_blank"
              href="https://www.linkedin.com/in/devcarloslima/"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              className="socialMedia"
              target="_blank"
              href="https://abrir.link/zKoix"
            >
              <SiWhatsapp size={40} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
