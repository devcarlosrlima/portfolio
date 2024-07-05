import React from "react";
import { ReactTyped } from "react-typed";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavtoContactPage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Carlos Lima
          <br />
          <ReactTyped
            strings={["Full Stack developer!", "Software Engineer!"]}
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
          transform : 'translateY(550px)',
        }}     
        end={{
          transform : 'translateX(0px)',
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavtoContactPage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
