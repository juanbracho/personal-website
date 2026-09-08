import React from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { experiences } from '../components/data';
import profileImg from '../assets/profile2.jpg';

const ALL_TIMELINE = [
  { year: '2018', where: 'Maracaibo, VE', what: 'Graduated — Bachelor of Law, Rafael Urdaneta University.' },
  { year: '2018', where: 'Buenos Aires, AR', what: 'Emigrated from Venezuela. Began rebuilding from scratch.' },
  { year: '2020', where: 'Buenos Aires, AR', what: 'Started Master of Arts in Corporate Law at UADE.' },
  { year: '2020', where: 'Buenos Aires, AR', what: 'Project Analyst at Avaya — first data & tech role.' },
  { year: '2022', where: 'Austin, TX', what: 'Re-emigrated to the United States. Started over, again.' },
  { year: '2022', where: 'N. Richland Hills, TX', what: 'Project Coordinator at Atwell LLC.' },
  { year: '2024', where: 'Austin, TX', what: 'UT Austin Data Analytics & Visualization Bootcamp.' },
  { year: '2025', where: 'Austin, TX', what: 'Operations & Supply Chain at HydroGraph. Three apps built.' },
  { year: '2025', where: 'The Internet', what: 'Started writing publicly. Still figuring things out.' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <BroadsheetShell pageTitle="About">
      <div className="bs-lead">
        <div className="bs-story">
          <div className="bs-kicker">The Long Version</div>
          <h1 className="bs-hl">Jack of a few trades, still learning most of them.</h1>
          <div className="bs-intro">
            <p>I grew up in Maracaibo, Venezuela, studied law, then watched the country I knew slowly fall apart. In 2018 I emigrated to Buenos Aires with one bag and not much else — and spent two years rebuilding, completing a Master's in Corporate Law while working full-time. In 2022 I made the same bet again, this time to Austin, Texas.</p>
            <p>I've been a lawyer, a store manager, a project coordinator, a data analyst, an executive assistant, and now a solo app developer. None of those paths were planned. Most of the best things weren't. I write about what I'm learning, build apps for problems I have myself, and read too many books about stoicism and neuroscience.</p>
            <p>What ties it together: a refusal to specialize too early, a preference for doing the thing over talking about it, and the belief that being a jack of all trades is only a problem if you stop learning.</p>
          </div>
          <div className="bs-byline">{experiences[0].title} · {experiences[0].organization} · Austin, TX</div>
        </div>
        <div className="bs-rail">
          <div className="bs-polaroid">
            <img src={profileImg} alt="Juan Bracho" />
            <div className="bs-cap">Málaga, Spain</div>
          </div>
          <div className="bs-stampbox">
            <h4>Passport</h4>
            <div className="bs-facts">
              <span><b>Born</b><i>Maracaibo, VE</i></span>
              <span><b>Based</b><i>Austin, TX</i></span>
              <span><b>Languages</b><i>ES · EN · IT · FR (learning)</i></span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="bs-el" onClick={() => navigate('/contact')} style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--red)', background: 'none', border: '2px solid var(--red)', padding: '8px 14px', cursor: 'pointer' }}>Write to me →</button>
            <button className="bs-el" onClick={() => navigate('/study')} style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink)', background: 'none', border: '2px solid var(--ink)', padding: '8px 14px', cursor: 'pointer' }}>View Study →</button>
          </div>
        </div>
      </div>

      <div className="bs-shead">
        <h2>Trajectory</h2>
        <span className="bs-no">Maracaibo → Buenos Aires → Austin</span>
      </div>
      {ALL_TIMELINE.map((t, i) => (
        <div className="bs-brief" key={i}>
          <span className="bs-n">{t.year}</span>
          <div>
            <h3 style={{ fontSize: 16 }}>{t.where}</h3>
            <p style={{ fontStyle: 'normal' }}>{t.what}</p>
          </div>
        </div>
      ))}
    </BroadsheetShell>
  );
}
