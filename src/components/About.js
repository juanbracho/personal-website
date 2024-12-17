import React from "react";
import "../pages/Home.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="left-about">
          <h4 className="about-title">A Little Bit About Me.</h4>
          <p>
            Growing up in Maracaibo, Venezuela, I studied law and took part in
            political initiatives aimed at helping my country during difficult
            times. Family values found me partaking in many community service
            activities, including one of the most impactful as a camp counselor
            for low-income children. Experiences at home led me to move abroad,
            twice, which has taught me to be flexible, adaptable, and adept at
            cross-cultural communication. I've come to realize that kindness is
            the only universal "religion" we need, both toward others and
            ourselves. 
            <br />
            <br />
            My academic and professional experience began with a
            Bachelor's in Law in Venezuela, driven by my desire to combat
            corruption and see my country through the reimplementation of norms
            and laws. Unfortunately, dictatorship led to my first move abroad to
            Buenos Aires, Argentina, where I enrolled in a Master's program in
            Corporate Law to learn about Argentine law and eventually practice
            at a firm there. While in school, I dabbled in programming and was
            working for Avaya, a U.S. company with offices in Buenos Aires where
            I worked as a project administrator on a bilingual (ESP-ENG) team.
            I'm forever grateful for what I learned at Avaya and in Buenos Aires
            as it provided me with the confidence to imagine my career path
            after being bound by many limitations in Venezuela.
            <br />
            <br />
            I met my partner in Argentina and eventually moved to the U.S., where I deepened my
            knowledge in programming and data analytics, leading me to
            transition into a new career. Though unable to practice law due to
            immigration constraints, my career continued to shift toward project
            administration and management, where I apply my detail-oriented, and
            borderline OCD organizational skills with cross cultural
            comunication, flexibility and adaptability that I've learned from
            emigrating twice. I speak Spanish (native), English (fluent), and
            Italian (intermediate), with the personal goal of becoming a
            polyglot.
          </p>
        </div>
        <div className="right-about">
          <div className="about-item">
            <p className="large-text">Bootcamp</p>
            <p className="small-text">
              Data Analytics
              <br />
              and Visualization
            </p>
          </div>
          <div className="about-item">
            <p className="large-text">Master of Arts</p>
            <p className="small-text">
              Corporate
              <br />
              Law
            </p>
          </div>
          <div className="about-item">
            <p className="large-text">Bachelor of Arts</p>
            <p className="small-text">Law</p>
          </div>
          <div className="about-item">
            <p className="large-text">4 Years</p>
            <p className="small-text">
              Management
              <br />
              Leadership Experience
            </p>
          </div>
          <div className="about-item">
            <p className="large-text">10+</p>
            <p className="small-text">
              Programming and
              <br />
              Management Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
