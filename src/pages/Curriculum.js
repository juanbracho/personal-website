import React from 'react';
import BroadsheetShell from '../components/BroadsheetShell';
import { experiences, education, skills } from '../components/data';

export default function Curriculum() {
  return (
    <BroadsheetShell pageTitle="The Résumé">
      <div className="bs-shead" style={{ marginTop: 20 }}>
        <h2>Employment History</h2>
        <span className="bs-no">{experiences.length} entries · reverse chronological</span>
      </div>
      <div className="bs-jobs">
        {experiences.map((exp, i) => (
          <div className="bs-job" key={i}>
            <div className="bs-when">{exp.date}</div>
            <h3>{exp.title}</h3>
            <p className="bs-org">{exp.organization} · {exp.location}</p>
            <ul>
              {exp.responsibilities.slice(0, 4).map((r, j) => <li key={j}>{r}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="bs-shead">
        <h2>Credentials</h2>
        <span className="bs-no">{education.length} institutions · three countries</span>
      </div>
      <div className="bs-creds">
        {education.map((e, i) => (
          <div className="bs-cred" key={i}>
            <div className="bs-yr">{e.date}</div>
            <h3>{e.title}</h3>
            <p className="bs-school">{e.organization}, {e.location}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </div>

      <div className="bs-shead">
        <h2>Skills</h2>
        <span className="bs-no">tools &amp; competencies</span>
      </div>
      <div className="bs-strip">
        {skills.map(s => (
          <div key={s.cat}>
            <h4>{s.cat}</h4>
            <p>{s.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </BroadsheetShell>
  );
}
