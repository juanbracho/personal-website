import React from 'react';
import '../pages/Home.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="left-about">
          <h4 className="about-title">A Little Bit About Me.</h4>
          <p>I was born in Maracaibo, Venezuela where I spent my childhood and met my closest friends. Growing
                        up I saw a beautiful country fall
                        into a mayor economic, social, political and sanitary crisis (among others); but had been lucky
                        enough to travel and study at good
                        schools. My experiences and the changes I witnessed my country go through inspired me to go to
                        Law School at Rafael Urdaneta University.<br />
                        After I graduated from law school, like the other 6 million people in Venezuela, I decided that
                        it was time for me to leave the country due to how difficult it
                        was becoming to live there. I chose to move to Buenos Aires, Argentina where I had many close
                        friends and knew I could further pursue my
                        education. There, I decided to start a Master of Arts in Corporate Law to be able to better
                        understand business law. In my time in Argentina,
                        I found it was difficult as an immigrant to find opportunities to practice law. Instead of being
                        discouraged, I used the opportunity to
                        expand my horizons by learning new skills that I had always been interested in, taking different
                        courses during the COVID-19 pandemic
                        about Project Management, Web Development, Data Analysis, Digital Marketing and programming
                        languages like Python and JavaScript.<br />
                        After 3 great years in Argentina, me and my wife made the decision to move to the United States
                        for her to accept a great professional
                        opportunity. This for me was another setback in starting my career, because I was almost a year
                        into a job with Avaya Argentina where I
                        was able to advance my skills by working with sales forecasting, supply chain management,
                        invoicing and billing, and resource management—all
                        in Spanish and English.<br />Right now, I am actively looking for work and ready my next
                        experience. When I'm not taking courses online,
                        I enjoy playing with my two rescue dogs, Nelson and Jaime, and learning Italian.
                    </p>
        </div>
        <div className="right-about">
          <div className="about-item">
            <p className="large-text">Master of Arts</p>
            <p className="small-text">Corporate<br />Law</p>
          </div>
          <div className="about-item">
            <p className="large-text">Bachelor of Arts</p>
            <p className="small-text">Law</p>
          </div>
          <div className="about-item">
            <p className="large-text">2 Years</p>
            <p className="small-text">Management<br />Leadership Experience</p>
          </div>
          <div className="about-item">
            <p className="large-text">10+</p>
            <p className="small-text">Programming<br />Management Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
