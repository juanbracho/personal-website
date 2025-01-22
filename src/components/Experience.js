import React from "react";
import "./ResumeCarousel.css";

const Experience = () => {
  React.useEffect(() => {
    const scrollers = document.querySelectorAll(".education-scroller-track");
    scrollers.forEach((track) => {
      track.innerHTML += track.innerHTML; // Duplicate content for smooth scroll
    });
  }, []);

  return (
    <section className="experience-container">
      <div className="experience-header">
        <span className="experience-bg-text">MY EXPERIENCE</span>
        <h2>
          MY <span>EXPERIENCE</span>
        </h2>
      </div>
      <div className="education-scroller">
        <div className="education-scroller-track">
          <div className="scroller-card">
            <h3 className="card-title">Project Administrator</h3>
            <p className="card-info">November 2022 - Present</p>
            <p className="card-info">Atwell LLC</p>
            <p className="card-info">Dallas, TX, USA</p>
            <p className="card-info">
              Provide administrative support to project teams.
              <br />
              Due diligence research.
              <br />
              Maintain and create templates (work orders, reports): type,
              finalize, copy and distribute.
              <br />
              Revision of service agreements.
              <br />
              Client onboarding and vendor management.
              <br />
              Monitor project status.
              <br />
              Event organization and coordination.
            </p>
          </div>
          <div className="scroller-card">
            <h3 className="card-title">ECC Retention Specialist</h3>
            <p className="card-info">August 2022 - November 2022</p>
            <p className="card-info">State Farm</p>
            <p className="card-info">Dallas, TX, USA</p>
            <p className="card-info">
              Conducted client changes to policies and questions in English and
              Spanish.
              <br />
              Performed changes to additions and reinstatements of Auto and Fire
              Policies.
            </p>
          </div>
          <div className="scroller-card">
            <h3 className="card-title">Store Manager</h3>
            <p className="card-info">June 2019 - October 2020</p>
            <p className="card-info">Mascotas de la Abadia</p>
            <p className="card-info">Buenos Aires, Argentina</p>
            <p className="card-info">
              Supply chain management including tracking inventory, ordering from suppliers.<br />
              Conducted client consultations in Spanish and English<br />
              Tracked expenses and profit for stores.<br />
              Data analysis via Excel including sales projection and per-product sale comparisons across stores.<br />
            </p>
          </div>
          <div className="scroller-card">
            <h3 className="card-title">Project Administrator</h3>
            <p className="card-info">October 2020 - September 2021</p>
            <p className="card-info">Avaya</p>
            <p className="card-info">Buenos Aires, Argentina</p>
            <p className="card-info">
              Resource management and allocation, including tracking hours and
              expenses.
              <br />
              Managed calendars for multiple project leaders and staff.
              <br />
              Sent invoices to clients and filed contractor bills.
              <br />
              Drafted project summaries for resource usage, profits, and
              summaries.
              <br />
              Team member for the 2021 ISO9001 Internal Auditing process.
              <br />
              Worked with teams in Spanish and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
