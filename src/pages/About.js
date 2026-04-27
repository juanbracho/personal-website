import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { experiences } from '../components/data';
import profileImg from '../assets/profile2.jpg';

const ALL_TIMELINE = [
  { year: '2018', where: 'Maracaibo, VE', what: 'Graduated — Bachelor of Law, Rafael Urdaneta University.' },
  { year: '2018', where: 'Buenos Aires, AR', what: 'Emigrated from Venezuela. Began rebuilding from scratch.' },
  { year: '2020', where: 'Buenos Aires, AR', what: 'Started Master of Arts in Corporate Law at UADE.' },
  { year: '2020', where: 'Buenos Aires, AR', what: 'Project Administrator at Avaya — first data & tech role.' },
  { year: '2022', where: 'Austin, TX', what: 'Re-emigrated to the United States. Started over, again.' },
  { year: '2022', where: 'N. Richland Hills, TX', what: 'Project Administrator at Atwell LLC.' },
  { year: '2024', where: 'Austin, TX', what: 'UT Austin Data Analytics & Visualization Bootcamp.' },
  { year: '2025', where: 'Austin, TX', what: 'Executive Assistant at HydroGraph Clean Power. Five apps built.' },
  { year: '2025', where: 'The Internet', what: 'Started writing publicly. Still figuring things out.' },
];

export default function About() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <PageShell title="▰ ABOUT · PASSPORT">
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '380px 1fr', gap: 32, alignItems: 'start' }}>

        {/* ── Passport ── */}
        <div style={{
          background: 'linear-gradient(160deg, #5a3a1a, #3a2410)',
          color: '#d4a056',
          borderRadius: 8, padding: isMobile ? 24 : 32,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(212,160,86,0.3)',
          display: 'flex', flexDirection: 'column',
          position: isMobile ? 'relative' : 'sticky', top: isMobile ? 0 : 80,
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 3, opacity: 0.7 }}>
            PASAPORTE · PASSPORT · PASSAPORTO
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 44, fontWeight: 600, lineHeight: 1, marginTop: 8 }}>
            JUAN<br />BRACHO
          </div>
          <div style={{ marginTop: 14, fontSize: 13, color: '#fbeed8', opacity: 0.85, lineHeight: 1.7, fontFamily: '"Fraunces", serif' }}>
            Born Maracaibo, Venezuela.<br />
            Currently Austin, TX, USA.<br />
            Languages — ES · EN · IT · FR (learning)
          </div>

          {/* Photo + caption */}
          <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 170, height: 200, background: '#fbeed8', borderRadius: 3, padding: 5, flexShrink: 0 }}>
              <img src={profileImg} alt="Juan Bracho" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.3) contrast(0.95)' }} />
            </div>
            <div style={{
              fontFamily: '"Caveat", cursive', fontSize: 15, color: '#fbeed8', opacity: 0.9,
              whiteSpace: 'nowrap', transform: 'rotate(-6deg)',
            }}>
              ← Málaga, Spain
            </div>
          </div>

          {/* Stamps */}
          <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div style={{
              border: '3px solid #5e6b4a', color: '#5e6b4a',
              fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 2,
              padding: '7px 12px', borderRadius: 4, opacity: 0.8,
              transform: 'rotate(-8deg)', textAlign: 'center',
            }}>
              ★ BUENOS AIRES ★<br />
              <span style={{ fontSize: 15, fontWeight: 700, display: 'block', marginTop: 2 }}>2018</span>
            </div>
            <div style={{
              border: '3px solid #a08456', color: '#a08456',
              fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 2,
              padding: '7px 12px', borderRadius: 4, opacity: 0.8,
              transform: 'rotate(6deg)', textAlign: 'center',
            }}>
              ★ DALLAS TX ★<br />
              <span style={{ fontSize: 15, fontWeight: 700, display: 'block', marginTop: 2 }}>2022</span>
            </div>
            <div style={{
              border: '3px solid #c4633c', color: '#c4633c',
              fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 2,
              padding: '7px 12px', borderRadius: 4, opacity: 0.85,
              transform: 'rotate(-10deg)', textAlign: 'center',
            }}>
              ★ AUSTIN TX ★<br />
              <span style={{ fontSize: 15, fontWeight: 700, display: 'block', marginTop: 2 }}>2025</span>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 20, fontFamily: '"Caveat", cursive', fontSize: 18, color: '#fbeed8', opacity: 0.85 }}>
            ~ constant learner through life ~
          </div>

          {/* Quick links */}
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#d4a056', textDecoration: 'underline' }}>LinkedIn</a>
            <a href="https://github.com/juanbracho" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#d4a056', textDecoration: 'underline' }}>GitHub</a>
            <span onClick={() => navigate('/contact')} style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#d4a056', textDecoration: 'underline', cursor: 'pointer' }}>Write to me</span>
          </div>
        </div>

        {/* ── Bio + Timeline ── */}
        <div style={{
          background: '#fffaf0', padding: isMobile ? '28px 24px' : '44px 48px',
          borderRadius: 4, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)',
        }}>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 34 : 52, lineHeight: 1.02, fontWeight: 600, margin: 0, letterSpacing: -1.5 }}>
            The long version<span style={{ color: '#c4633c' }}>.</span>
          </h1>

          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.7, color: '#3a2f22', marginTop: 20 }}>
            I grew up in Maracaibo, Venezuela, studied law, then watched the country I knew slowly fall apart.
            In 2018 I emigrated to Buenos Aires with one bag and not much else — and spent two years rebuilding,
            completing a Master's in Corporate Law while working full-time. In 2022 I made the same bet again,
            this time to Austin, Texas.
          </p>

          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.7, color: '#3a2f22', marginTop: 18 }}>
            I've been a lawyer, a store manager, a project coordinator, a data analyst, an executive assistant,
            and now a solo app developer. None of those paths were planned. Most of the best things weren't.
            I write about what I'm learning, building apps for problems I have myself, and reading too many
            books about stoicism and neuroscience.
          </p>

          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.7, color: '#3a2f22', marginTop: 18 }}>
            What ties it together: a refusal to specialize too early, a preference for doing the thing over
            talking about it, and the belief that being a jack of all trades is only a problem
            if you stop learning.
          </p>

          {/* Trajectory */}
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase', marginTop: 36 }}>
            ~ trajectory
          </div>
          <div style={{ marginTop: 16, position: 'relative', paddingLeft: 28 }}>
            <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 1, background: 'rgba(196,99,60,0.3)' }} />
            {ALL_TIMELINE.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16, padding: '10px 0', position: 'relative' }}>
                <div style={{ position: 'absolute', left: -28, top: 16, width: 11, height: 11, background: '#c4633c', borderRadius: '50%', boxShadow: '0 0 0 4px #fffaf0' }} />
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#c4633c' }}>{t.year}</div>
                <div>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: '#7a5530' }}>{t.where}</div>
                  <div style={{ fontSize: 14, color: '#2a1f15', marginTop: 2, lineHeight: 1.5 }}>{t.what}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Current work */}
          <div style={{ marginTop: 36, padding: '22px 24px', background: '#f5e8d4', borderRadius: 8, border: '1px dashed #c4633c' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020', marginBottom: 8 }}>~ right now</div>
            <div style={{ fontSize: 14, color: '#3a2f22', lineHeight: 1.7, fontFamily: '"Fraunces", serif' }}>
              {experiences[0].title} at {experiences[0].organization}.<br />
              Building apps (Kaizen, Kage, Kioku), writing essays, reading too much.<br />
              Learning French. Based in Austin, TX.
            </div>
          </div>

          {/* Contact */}
          <div style={{ marginTop: 28, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/contact')} style={{
              padding: '12px 24px', background: '#c4633c', color: '#fff',
              borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14,
              cursor: 'pointer', fontFamily: '"Special Elite", monospace', letterSpacing: 1,
            }}>
              WRITE TO ME →
            </button>
            <button onClick={() => navigate('/study')} style={{
              padding: '12px 24px', background: 'transparent',
              border: '2px solid rgba(90,69,48,0.4)', color: '#5a4530',
              borderRadius: 8, fontWeight: 600, fontSize: 14,
              cursor: 'pointer', fontFamily: '"Special Elite", monospace', letterSpacing: 1,
            }}>
              VIEW STUDY ROOM →
            </button>
          </div>

          <div style={{ marginTop: 32, fontFamily: '"Caveat", cursive', fontSize: 36, color: '#c4633c', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            ~ Juan
          </div>
        </div>
      </div>
    </PageShell>
  );
}
