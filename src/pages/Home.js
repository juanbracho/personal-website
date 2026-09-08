import React from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { mobileApps } from '../components/appsData';
import { articles } from '../components/articlesData';
import { books } from '../components/booksData';
import { skills } from '../components/data';
import profileImg from '../assets/profile-sevilla.jpeg';

const featuredArticles = articles
  .filter(a => a.featured)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const homeSkills = skills.filter(s =>
  ['Governance & Compliance', 'Technical', 'Languages', 'Procurement & Sourcing'].includes(s.cat)
);

export default function Home() {
  const navigate = useNavigate();

  return (
    <BroadsheetShell big>
      <div className="bs-lead">
        <div className="bs-story">
          <div className="bs-kicker">Hi, I'm Juan</div>
          <h1 className="bs-hl">A bit about me, and what you'll find here.</h1>
          <div className="bs-intro">
            <p>I'm originally from Maracaibo, Venezuela — went through Buenos Aires, Argentina, and now live in Austin, Texas. Day to day I work in operations and compliance. Outside of that, I read a lot, write the occasional essay, and build small apps mostly for myself, because I wanted them to exist.</p>
            <p>I speak Spanish and English, and I'm slowly working on Italian. This site is where I keep all of it — the apps, the writing, the books I've read, and a proper résumé if you need one.</p>
          </div>
          <div className="bs-byline">Maracaibo → Buenos Aires → Austin</div>
        </div>
        <div className="bs-rail">
          <div className="bs-polaroid">
            <img src={profileImg} alt="Juan Bracho" />
            <div className="bs-cap">Sevilla, sometime last year</div>
          </div>
          <div className="bs-stampbox">
            <h4>The Particulars</h4>
            <div className="bs-facts">
              <span><b>Now</b><i>Ops &amp; Compliance · HydroGraph</i></span>
              <span><b>Based</b><i>Austin, Texas</i></span>
              <span><b>Speaks</b><i>ES · EN · IT (learning)</i></span>
              <span><b>Building</b><i>{mobileApps.length} personal apps</i></span>
            </div>
          </div>
          <div className="bs-stamp">Open to good opportunities</div>
        </div>
      </div>

      <div className="bs-shead">
        <h2>Around the Site</h2>
        <span className="bs-no">Home preview · full pages linked below</span>
      </div>
      <div className="bs-previews">
        <div className="bs-preview" onClick={() => navigate('/apps')} style={{ cursor: 'pointer' }}>
          <div className="bs-k">{mobileApps.length} apps, mostly for myself</div>
          <h3>Apps</h3>
          <p>{mobileApps.map(a => a.name).join(', ')} — small tools I built because I wanted them to exist.</p>
          <span className="bs-go">See the apps →</span>
        </div>
        <div className="bs-preview" onClick={() => navigate('/writing')} style={{ cursor: 'pointer' }}>
          <div className="bs-k">essays</div>
          <h3>Writing</h3>
          <p>Notes on solitude, AI, and figuring things out as I go.</p>
          <span className="bs-go">Read the columns →</span>
        </div>
        <div className="bs-preview" onClick={() => navigate('/study')} style={{ cursor: 'pointer' }}>
          <div className="bs-k">{books.length} books and counting</div>
          <h3>On My Shelf</h3>
          <p>Everything I've read since 2025, rated honestly.</p>
          <span className="bs-go">Browse the shelf →</span>
        </div>
        <div className="bs-preview" onClick={() => navigate('/curriculum')} style={{ cursor: 'pointer' }}>
          <div className="bs-k">background</div>
          <h3>Skills</h3>
          <p>{homeSkills.map(s => s.cat).join(', ')} — the short version.</p>
          <span className="bs-go">Full breakdown →</span>
        </div>
      </div>

      {featuredArticles.length > 0 && (
        <>
          <div className="bs-shead">
            <h2>Latest Writing</h2>
            <span className="bs-no">{featuredArticles.length} featured essays</span>
          </div>
          {featuredArticles.slice(0, 3).map((a, i) => (
            <div className="bs-brief" key={a.id} onClick={() => navigate(a.type === 'external' ? '/writing' : `/writing/${a.id}`)} style={{ cursor: 'pointer' }}>
              <span className="bs-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
              <span className="bs-yr">{new Date(a.date).getFullYear()}</span>
            </div>
          ))}
        </>
      )}
    </BroadsheetShell>
  );
}
