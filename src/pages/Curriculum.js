import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { experiences, education } from '../components/data';
import profileImg from '../assets/profile.jpeg';

const C = {
  cream:    '#fffaf0',
  manila:   '#fdf3d8',
  ink:      '#1f1d18',
  ink2:     '#2a1f15',
  textDark: '#3a2f22',
  textMuted:'#5a4530',
  terra:    '#c4633c',
  rust:     '#a04020',
  gold:     '#d4a056',
  olive:    '#5e6b4a',
  ghost:    '#fbeed8',
  wood:     '#6b4220',
};

const ACCENTS = [C.terra, C.rust, C.olive, '#7a5a30'];

function deriveMeta(exp) {
  const m = exp.date.match(/([A-Z][a-z]+) (\d{4})/);
  const dateShort = m ? `${m[1].slice(0, 3).toUpperCase()} ${m[2]}` : exp.date.toUpperCase();

  let duration = '';
  const range = exp.date.match(/([A-Z][a-z]+ \d{4})\s*[-–]\s*([A-Z][a-z]+ \d{4}|Present)/);
  if (range) {
    const start = new Date(range[1]);
    const end   = range[2] === 'Present' ? new Date() : new Date(range[2]);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months >= 12) {
      const yrs = Math.floor(months / 12);
      const rem = months % 12;
      duration = `${yrs}y${rem ? ` ${rem}mo` : ''}`;
    } else {
      duration = `${Math.max(1, months)}mo`;
    }
    if (range[2] === 'Present') duration = `${duration} · ongoing`;
  }

  let flag = '🇺🇸';
  if (/Argentina/i.test(exp.location)) flag = '🇦🇷';
  else if (/Venezuela/i.test(exp.location)) flag = '🇻🇪';

  return { dateShort, duration, flag };
}

function FolderEntry({ exp, accent, last, isMobile }) {
  const { dateShort, duration, flag } = deriveMeta(exp);
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      gap: isMobile ? 12 : 18,
      marginBottom: last ? 0 : 28,
    }}>
      <div style={{
        width: isMobile ? 70 : 90,
        flexShrink: 0,
        textAlign: 'right',
        paddingRight: 14,
        position: 'relative',
        borderRight: '1.5px dashed rgba(60,30,10,0.3)',
      }}>
        <div style={{
          position: 'absolute', right: -8, top: 4,
          width: 15, height: 15, borderRadius: '50%',
          background: accent,
          boxShadow: `0 0 0 4px ${C.manila}, 0 1px 2px rgba(0,0,0,0.25)`,
        }} />
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1.5,
          color: C.rust, marginTop: 2, lineHeight: 1.3,
        }}>
          {dateShort}
        </div>
        <div style={{
          fontFamily: '"Caveat", cursive', fontSize: 18, color: accent, marginTop: 4, lineHeight: 1,
        }}>
          {duration || '—'}
        </div>
        <div style={{ fontSize: 18, marginTop: 6 }}>{flag}</div>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: '"Fraunces", serif', fontSize: isMobile ? 20 : 22, fontWeight: 700,
          color: C.ink2, lineHeight: 1.15, letterSpacing: -0.4,
        }}>
          {exp.title}
        </div>
        <div style={{
          fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1.5,
          color: C.textMuted, marginTop: 2, textTransform: 'uppercase',
        }}>
          {exp.organization} · {exp.location}
        </div>
        <ul style={{ marginTop: 10, paddingLeft: 18 }}>
          {exp.responsibilities.slice(0, 4).map((b, i) => (
            <li key={i} style={{
              fontFamily: '"Fraunces", serif', fontSize: isMobile ? 13 : 12.5, lineHeight: 1.55,
              color: C.ink2, marginBottom: 4,
            }}>
              {b}
            </li>
          ))}
          {exp.responsibilities.length > 4 && (
            <li style={{
              fontFamily: '"Fraunces", serif', fontSize: 12, fontStyle: 'italic',
              color: C.textMuted, listStyle: 'none', marginLeft: -18, paddingLeft: 18,
            }}>
              +{exp.responsibilities.length - 4} more in the full file
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function SubjectDetails() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.4)',
      border: '1.5px solid rgba(60,30,10,0.3)',
      padding: '12px 14px',
      fontFamily: '"Special Elite", monospace',
      fontSize: 11, letterSpacing: 0.5, lineHeight: 1.7,
      color: C.ink2,
    }}>
      <div style={{ fontSize: 9, letterSpacing: 2, color: C.rust, marginBottom: 6 }}>
        ─ SUBJECT DETAILS ─
      </div>
      <div><strong>NAME:</strong> BRACHO, JUAN D.</div>
      <div><strong>BORN:</strong> MARACAIBO, VE</div>
      <div><strong>RESIDES:</strong> AUSTIN, TX</div>
      <div><strong>EMAIL:</strong>{' '}
        <a href="mailto:info@juanbracho.com" style={{ color: C.rust, textDecoration: 'underline' }}>
          info@juanbracho.com
        </a>
      </div>
      <div><strong>LINKEDIN:</strong>{' '}
        <a href="https://www.linkedin.com/in/juan-d-bracho/" target="_blank" rel="noopener noreferrer" style={{ color: C.rust, textDecoration: 'underline' }}>
          juan-d-bracho
        </a>
      </div>
      <div style={{ marginTop: 4 }}>
        <strong>STATUS:</strong>{' '}
        <span style={{
          display: 'inline-block', padding: '1px 8px',
          background: C.olive, color: '#fff', fontSize: 9, letterSpacing: 1, borderRadius: 2,
        }}>OPEN TO WORK · ALWAYS</span>
      </div>
    </div>
  );
}

function ConfidentialStamp() {
  return (
    <div style={{
      position: 'absolute', top: 24, right: 24,
      border: `3px solid ${C.rust}`,
      color: C.rust,
      padding: '6px 16px',
      fontFamily: '"Special Elite", monospace',
      fontSize: 18, letterSpacing: 3, fontWeight: 700,
      transform: 'rotate(8deg)',
      opacity: 0.78,
      boxShadow: `inset 0 0 0 1.5px ${C.rust}, inset 0 0 0 4.5px transparent, inset 0 0 0 5.5px rgba(160,64,32,0.4)`,
      borderRadius: 2,
      textAlign: 'center',
      pointerEvents: 'none',
    }}>
      CONFIDENTIAL
      <div style={{ fontSize: 9, letterSpacing: 1.5, marginTop: 2, opacity: 0.85 }}>
        FOR YOUR EYES ONLY · CASE № BRA-001
      </div>
    </div>
  );
}

export default function Curriculum() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('experience');

  const TABS = [
    { id: 'experience', label: '📋 EXPERIENCE' },
    { id: 'education',  label: '🎓 EDUCATION'  },
    { id: 'skills',     label: '🧰 SKILLS'     },
  ];

  return (
    <PageShell title="▰ THE CURRICULUM">
      <div style={{ marginTop: 20, position: 'relative' }}>

        {/* Header */}
        <div style={{ position: 'relative' }}>
          <h1 style={{
            fontFamily: '"Fraunces", serif',
            fontSize: isMobile ? 42 : 56,
            fontWeight: 600,
            color: C.ghost,
            letterSpacing: -2,
            lineHeight: 1,
            margin: 0,
          }}>
            The Dossier<span style={{ color: C.gold }}>.</span>
          </h1>
          <p style={{
            fontFamily: '"Caveat", cursive', fontSize: 22,
            color: C.ghost, opacity: 0.85, marginTop: 8,
          }}>
            Work history, education, and skills — filed neatly, just in case you're hiring.
          </p>

          {!isMobile && (
            <div style={{
              position: 'absolute', top: 8, right: 20,
              width: 220, height: 16,
              background: 'linear-gradient(180deg, #2a1808 0%, #1a0e04 50%, #2a1808 100%)',
              borderRadius: 8,
              transform: 'rotate(-22deg)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}>
              <div style={{
                position: 'absolute', right: -22, top: 1, width: 28, height: 14,
                background: 'linear-gradient(90deg, #d4a056 0%, #a87830 50%, #d4a056 100%)',
                clipPath: 'polygon(0 50%, 30% 0, 100% 50%, 30% 100%)',
              }} />
              <div style={{
                position: 'absolute', left: 90, top: -1, width: 6, height: 18,
                background: 'linear-gradient(90deg, #d4a056 0%, #8a6020 100%)',
              }} />
            </div>
          )}
        </div>

        {/* Folder tabs */}
        <div style={{
          marginTop: 48,
          display: 'flex',
          gap: 4,
          paddingLeft: isMobile ? 0 : 30,
          flexWrap: isMobile ? 'wrap' : 'nowrap',
        }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: '10px 22px 14px',
                background: activeTab === t.id
                  ? 'linear-gradient(180deg, #e0b070 0%, #d4a056 100%)'
                  : 'linear-gradient(180deg, #b89048 0%, #a87830 100%)',
                border: `1.5px solid ${C.wood}`,
                borderBottom: 'none',
                borderRadius: '8px 8px 0 0',
                fontFamily: '"Special Elite", monospace',
                fontSize: 12, letterSpacing: 1.5,
                color: activeTab === t.id ? '#2a1808' : '#c8a060',
                boxShadow: activeTab === t.id ? '0 -4px 8px rgba(0,0,0,0.2)' : 'inset 0 -3px 6px rgba(0,0,0,0.15)',
                position: 'relative',
                top: activeTab === t.id ? 0 : 4,
                cursor: 'pointer',
                transition: 'top 0.15s, background 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Manila folder */}
        <div style={{
          background: 'linear-gradient(180deg, #e0b070 0%, #c4923c 100%)',
          border: `1.5px solid ${C.wood}`,
          borderRadius: '0 12px 14px 14px',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
          padding: 12,
          position: 'relative',
        }}>
          {!isMobile && (
            <div style={{
              position: 'absolute',
              top: -18, left: 90,
              width: 60, height: 100,
              zIndex: 4,
              pointerEvents: 'none',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                border: '4px solid #b8b8c0',
                borderRadius: '30px 30px 12px 12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
              }} />
              <div style={{
                position: 'absolute', top: 9, left: 9, right: 9, bottom: 24,
                border: '3px solid #d0d0d8',
                borderRadius: '20px 20px 6px 6px',
              }} />
            </div>
          )}

          {/* Inner paper */}
          <div style={{
            background: C.manila,
            backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 22px, rgba(60,30,10,0.06) 22px, rgba(60,30,10,0.06) 23px),
                              radial-gradient(rgba(60,30,10,0.04) 1px, transparent 1px)`,
            backgroundSize: '100% 23px, 4px 4px',
            borderRadius: '0 6px 8px 8px',
            padding: isMobile ? '32px 22px 28px 22px' : '40px 50px 40px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {!isMobile && (
              <>
                <div style={{
                  position: 'absolute', left: 40, top: 24, bottom: 24, width: 2,
                  background: 'rgba(160,64,32,0.4)',
                  borderLeft: '1px dashed rgba(160,64,32,0.5)',
                  pointerEvents: 'none',
                }} />
                {[60, 320, 580, 840, 1100, 1360, 1620, 1880, 2140, 2400].map(y => (
                  <div key={y} style={{
                    position: 'absolute', left: 30, top: y, width: 14, height: 14,
                    borderRadius: '50%', background: '#8a5a32',
                    boxShadow: 'inset 0 1.5px 3px rgba(0,0,0,0.4)',
                    pointerEvents: 'none',
                  }} />
                ))}
              </>
            )}

            {!isMobile && <ConfidentialStamp />}

            {/* Case header */}
            <div style={{ marginBottom: 28, position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2,
                color: C.rust,
              }}>
                CASE FILE / EXPEDIENTE — JUAN D. BRACHO
              </div>
              <div style={{
                fontFamily: '"Fraunces", serif', fontSize: isMobile ? 36 : 48, fontWeight: 700,
                color: C.ink2, lineHeight: 1, letterSpacing: -1.5, marginTop: 6,
              }}>
Procurement & Supply Chain<span style={{ color: C.terra }}>.</span>
              </div>
              <div style={{
                fontFamily: '"Caveat", cursive', fontSize: 22, color: C.textMuted, marginTop: 6,
              }}>
                Austin, TX · open since 2025 · always learning
              </div>
            </div>

            {/* ── EXPERIENCE ── */}
            {activeTab === 'experience' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
                gap: isMobile ? 28 : 36,
                position: 'relative',
                zIndex: 1,
              }}>
                {/* Left — timeline */}
                <div>
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap',
                    borderBottom: '2px solid rgba(60,30,10,0.4)',
                    paddingBottom: 8, marginBottom: 18,
                  }}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.ink2 }}>
                      Exhibit A — Employment History
                    </div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: C.terra }}>
                      reverse chronological
                    </div>
                  </div>
                  {experiences.map((e, i) => (
                    <FolderEntry key={i} exp={e} accent={ACCENTS[i % ACCENTS.length]} last={i === experiences.length - 1} isMobile={isMobile} />
                  ))}
                </div>

                {/* Right — polaroid + subject details */}
                <div>
                  <div style={{
                    background: '#fff',
                    padding: '12px 12px 36px',
                    width: isMobile ? 200 : 220,
                    margin: isMobile ? '0 auto 22px' : '0 0 22px',
                    boxShadow: '0 18px 30px -10px rgba(0,0,0,0.45), 0 4px 8px rgba(0,0,0,0.15)',
                    transform: 'rotate(4deg)',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute', top: -12, left: 50, width: 110, height: 26,
                      background: 'rgba(232,168,120,0.7)', transform: 'rotate(-3deg)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                    }} />
                    <div style={{ width: '100%', height: 240, background: '#ddd', overflow: 'hidden' }}>
                      <img src={profileImg} alt="Juan" style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        filter: 'sepia(0.2) saturate(0.9)',
                      }} />
                    </div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, textAlign: 'center', marginTop: 8, color: C.ink2 }}>
                      Granada, Spain ↑
                    </div>
                  </div>
                  <SubjectDetails />
                </div>
              </div>
            )}

            {/* ── EDUCATION ── */}
            {activeTab === 'education' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
                gap: isMobile ? 28 : 36,
                position: 'relative', zIndex: 1,
              }}>
                {/* Left — full education list */}
                <div>
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap',
                    borderBottom: '2px solid rgba(60,30,10,0.4)',
                    paddingBottom: 8, marginBottom: 24,
                  }}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.ink2 }}>
                      Exhibit B — Education
                    </div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: C.olive }}>
                      degrees &amp; certifications
                    </div>
                  </div>
                  <div style={{ position: 'relative', paddingLeft: 30 }}>
                    <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: 'rgba(94,107,74,0.35)' }} />
                    {education.map((e, i) => (
                      <div key={i} style={{ marginBottom: 32, position: 'relative' }}>
                        <div style={{
                          position: 'absolute', left: -30, top: 6,
                          width: 13, height: 13, background: C.olive, borderRadius: '50%',
                          boxShadow: `0 0 0 4px ${C.manila}`,
                        }} />
                        <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 1.5, color: C.olive }}>
                          {e.date.toUpperCase()}
                        </div>
                        <div style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 18 : 20, fontWeight: 700, color: C.ink2, marginTop: 3, lineHeight: 1.2 }}>
                          {e.title}
                        </div>
                        <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1, color: C.textMuted, marginTop: 2 }}>
                          {e.organization} · {e.location}
                        </div>
                        {e.description && (
                          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 13, lineHeight: 1.65, color: C.ink2, marginTop: 8 }}>
                            {e.description}
                          </p>
                        )}
                        {e.thesis && (
                          <div style={{ marginTop: 10, padding: '8px 12px', background: 'rgba(94,107,74,0.1)', borderLeft: `3px solid ${C.olive}`, borderRadius: '0 4px 4px 0' }}>
                            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 1.5, color: C.olive, textTransform: 'uppercase', marginBottom: 3 }}>Thesis</div>
                            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 13, fontStyle: 'italic', color: C.ink2, lineHeight: 1.55 }}>"{e.thesis}"</div>
                          </div>
                        )}
                        {e.coursework && (
                          <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                            {e.coursework.map(c => (
                              <span key={c} style={{
                                padding: '2px 9px', borderRadius: 999,
                                background: 'rgba(94,107,74,0.12)', color: C.olive,
                                fontSize: 10, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5,
                              }}>{c}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — subject details */}
                <div>
                  <SubjectDetails />
                </div>
              </div>
            )}

            {/* ── SKILLS ── */}
            {activeTab === 'skills' && (
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap',
                  borderBottom: '2px solid rgba(60,30,10,0.4)',
                  paddingBottom: 8, marginBottom: 28,
                }}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 22 : 26, fontWeight: 700, color: C.ink2 }}>
                    Exhibit C — Skills
                  </div>
                  <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: C.rust }}>
                    tools &amp; competencies
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 20,
                }}>
                  {[
                    { cat: 'Procurement & Sourcing',      color: C.terra,   items: ['Vendor sourcing and selection', 'Contract negotiation', 'Purchase order management', 'Invoice validation', 'RFP / requirements gathering'] },
                    { cat: 'Vendor & Contract Management', color: C.rust,    items: ['Vendor onboarding and offboarding', 'Service transition management', 'SaaS and MSP contract administration', 'Subcontractor agreement review', 'TPRM'] },
                    { cat: 'Supply & Inventory Operations', color: '#8a3f28', items: ['Supplier relationship management', 'Inventory / stock level management', 'Multi-site procurement coordination'] },
                    { cat: 'AI-Assisted Research & Tools', color: '#6b5c44', items: ['Notion (workflow / dashboard builds)', 'Claude Code', 'Perplexity (research validation)', 'AI-assisted data modeling and process automation'] },
                    { cat: 'Governance & Compliance',     color: C.olive,   items: ['Policy development', 'NIST CSF 2.0', 'ISO 27001', 'ISO 9001', 'Audit coordination', 'Permit compliance', 'Internal controls'] },
                    { cat: 'Technical',                   color: '#7a5a30', items: ['Python (Pandas, NumPy)', 'SQL', 'Excel (dashboards, forecasting)', 'Microsoft 365 / SharePoint Admin', 'MDM', 'Tableau'] },
                    { cat: 'Languages',                   color: '#5a7a8a', items: ['Spanish (Native/Bilingual)', 'English (Fluent/Bilingual)', 'Italian (Limited Working)'] },
                  ].map(({ cat, color, items }) => (
                    <div key={cat} style={{
                      background: 'rgba(255,255,255,0.35)',
                      border: `1.5px solid ${color}30`,
                      borderRadius: 6,
                      padding: '16px 18px',
                    }}>
                      <div style={{
                        fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 700,
                        color: C.ink2, marginBottom: 10, borderBottom: `2px solid ${color}40`, paddingBottom: 6,
                      }}>
                        {cat}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                        {items.map(t => (
                          <span key={t} style={{
                            fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 0.5,
                            padding: '3px 9px', background: `${color}15`, color,
                            borderRadius: 3, border: `1px solid ${color}25`,
                          }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer signature */}
            <div style={{
              marginTop: 32, paddingTop: 14,
              borderTop: '1.5px dashed rgba(60,30,10,0.4)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              flexWrap: 'wrap', gap: 12,
              position: 'relative', zIndex: 1,
            }}>
              <div>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 28, color: C.rust, lineHeight: 1 }}>
                  Juan Bracho
                </div>
                <div style={{
                  fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 1.5,
                  color: C.textMuted, marginTop: 4,
                }}>
                  FILED · AUSTIN, TX
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/juan-d-bracho/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1.5,
                  color: C.rust, textDecoration: 'underline',
                }}
              >
                VIEW ON LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom signoff */}
        <div style={{ marginTop: 60, textAlign: 'right' }}>
          <div style={{
            fontFamily: '"Caveat", cursive', fontSize: 32, color: C.ghost,
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}>
            ~ Juan
          </div>
          <div style={{
            fontFamily: '"Special Elite", monospace', fontSize: 11,
            color: 'rgba(251,238,216,0.4)', letterSpacing: 2, marginTop: 4,
          }}>
            END OF FILE · CASE OPEN
          </div>
        </div>
      </div>
    </PageShell>
  );
}
