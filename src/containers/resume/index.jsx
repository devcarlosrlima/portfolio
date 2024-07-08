import React from "react";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaBlackTie } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import './style.scss'
import { PiStudentBold } from "react-icons/pi";


const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yt-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: 'none',
                  color: 'var(--yt-sub-text-color)',
                  border: '1.5px solid var(--yt-main-color)'
                }}
                iconStyle={{
                  background: "#121212",
                  color: "var(--yt-main-color)",
                }}
                icon={<MdWork />}
                className="timeline__experience__vertical-timelina-element"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 >
                    {item.title}
                  </h3>
                  <h4 >
                    {item.location}
                  </h4>
                  <p>{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yt-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: 'none',
                  color: 'var(--yt-sub-text-color)',
                  border: '1.5px solid var(--yt-main-color)'
                }}
                 iconStyle={{
                  background: "#121212",
                  color: "var(--yt-main-color)",}}
                  icon={<PiStudentBold />}
                className="timeline__education__vertical-timelina-element"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 >
                    {item.title}
                  </h3>
                  <h4 >
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
