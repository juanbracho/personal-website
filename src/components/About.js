import React from "react";
import "../pages/Home.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h4 className="about-title">A Little Bit About Me.</h4>
          <p>
            From studying law in Venezuela to building mobile apps in the U.S., my journey has been shaped by adaptability and continuous learning. After emigrating twice—first to Buenos Aires, then to the United States—I transitioned from legal practice to tech, combining my background in project management with programming and data analytics.
            <br />
            <br />
            I bring a unique blend of skills: detail-oriented project administration, cross-cultural communication, and a passion for building solutions that make an impact. Multilingual (Spanish, English, Italian) and always learning, I thrive at the intersection of technology, management, and creative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
